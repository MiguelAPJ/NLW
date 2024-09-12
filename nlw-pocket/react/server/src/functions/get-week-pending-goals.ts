import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear"
import { db } from "../db"
import { goalCompletions, goals } from "../db/schema";
import { and, lte, sql, count, gte, eq } from "drizzle-orm"

dayjs.extend(weekOfYear)

export async function getWeekPendingGoals() {
  const firstDayOfWeek = dayjs().startOf('week').toDate()
  const lastDayOfWeek = dayjs().endOf("week").toDate()
  

  const goalsCreatedUpToWeek = db.$with('goals_created_up_to_Week').as(
    db.select({
      id: goals.id,
      title: goals.title,
      desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
      createAt: goals.createdAt,
    }).from(goals).where(lte(goals.createdAt, lastDayOfWeek))    
  )


  const goalCompletionsCounts = db.$with('goal_completions_counts').as(
    db.select({
      goalId: goalCompletions.goalId,
      completionsCount: count(goalCompletions.id).as('completionsCount'),
    })
      .from(goalCompletions)
      .where(
        and(
          gte(goalCompletions.createdAt, firstDayOfWeek),
          lte(goalCompletions.createdAt, lastDayOfWeek)
        )
      )
      .groupBy(goalCompletions.goalId)

  )

  const pendingGoals = await db
    .with(goalsCreatedUpToWeek, goalCompletionsCounts)
    .select({
      id: goalsCreatedUpToWeek.id,
      title: goalsCreatedUpToWeek.title,
      desiredWeeklyFrequency: goalsCreatedUpToWeek.desiredWeeklyFrequency,
      completionCount: sql`
        COALESCE(${goalCompletionsCounts.completionsCount}, 0)      
      `.mapWith(Number),

    })
    .from(goalsCreatedUpToWeek)
    .leftJoin(goalCompletionsCounts,eq(goalCompletionsCounts.goalId, goalsCreatedUpToWeek.id ))   

  return pendingGoals
}
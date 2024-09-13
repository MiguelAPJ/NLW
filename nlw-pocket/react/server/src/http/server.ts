import fastify from "fastify"
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod"
import { getWeekPendingGoals } from "../functions/get-week-pending-goals";
import { createGoalCompletion } from "../functions/create-goal-completion";
import { createGoalRoute } from "./routes/create-goal";
import {  getPendingRoute } from "./routes/get-pending-goals";
import { createCompletionRoute } from "./routes/create-completion";


const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalRoute)
app.register(createCompletionRoute)
app.register(getPendingRoute)







app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP server running!')
})
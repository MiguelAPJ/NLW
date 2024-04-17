import { ComponentProps } from "react"

 interface NavLinkProps extends ComponentProps<'a'> { // com esse comando ComponentProps, eu posso fazer o Navlink virar um componete HTMl A
  children: string
 }
 
export function NavLink(props: NavLinkProps) {
  return ( //{...props} pega todas as propriedades enviadas para o NavLink, e adiciona como atributo na tag A
    <a {...props} className="font-medium text-sm"> 
      {props.children}
    </a>
  )
}
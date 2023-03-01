import { ListItem, NavigationList, StyledNavLink, Wraper } from "./styled";


const Navigation = ({links}) => (
    <Wraper>
        <NavigationList>
            {links.map(link =>(
                <ListItem><StyledNavLink to={link.id} >{link.content}</StyledNavLink></ListItem>
            ) )}
        </NavigationList>
    </Wraper>
)

export default Navigation;
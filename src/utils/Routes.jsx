import React from 'react'
import {Route, Switch} from 'react-router-dom'


export const Routes = () => {
    return (
        <Switch>
            {/*a regex /:product faz as outras rotas bugarem corrigir após carrinho*/}
            {/*<Route exact path={"/:product"} component={Product} />*/}
            {/*<Route exact path={"/"} component={Posttest} />*/}
            {/*<Route exact path={"/my-account"} component={Testlogin} />*/}
            {/*<Route exact path={"/teste"} component={Posttest} />*/}
        </Switch>
    )
}
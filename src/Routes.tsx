import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './pages/Home'
import Login from './pages/Login'
import Reserva from './pages/InformaçõesParaCompra/Reserva'
import Cartão from './pages/InformaçõesParaCompra/NovoCartão'
import Loja from './pages/Home/LojaSapatos'
import LojaRoupas from './pages/Home/LojaRoupas'
import LojaSapatos from './pages/Home/LojaSapatos'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Reserva"
                component={Reserva}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Cartão"
                component={Cartão}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Loja"
                component={Loja}
            
            />
            <Stack.Screen
                name="LojaRoupas"
                component={LojaRoupas}
                
            />
            <Stack.Screen
                name="LojaSapatos"
                component={LojaSapatos}
                
            />
        </Stack.Navigator>
    )
}

import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer
      screenOptions={{                                 // Define o estilo do Drawer, objeto complexo.
        drawerStyle: {
          backgroundColor: "#021123",
        },
        drawerLabelStyle: {                            // Define a cor do texto do drawer                  
          color: "#fff",
        },
        headerStyle: {                                 // Define a customização de todos os headers
          backgroundColor: '#021123',
        },
        headerTintColor: '#FFF',                     // Altera a cor do texto, icones...
      }}
      >
    {/* Configurações da tela inicial */}
    <Drawer.Screen 
      name='index'                                    // Nome do arquivo/rota a ser customizado
      options={{
        drawerItemStyle: {display: 'none'},            // Esconde a tela index do drawer     
        headerShown: false,                            // Esconde o drawer na tela inicial
      }}
    />  

    {/* Configurações do pomodoro */}
    <Drawer.Screen 
      name='pomodoro'                                  
      options={{
          drawerLabel: 'Timer',                       // Altera visualmente o nome da tela no drawer
          title: '',
        }}
    /> 

    {/* Configurações do viacep */}
    <Drawer.Screen 
      name='viacep'                                  
      options={{
          drawerLabel: 'Meu Cep',                       // Altera visualmente o nome da tela no drawer
          title: '',
        }}
    /> 

    {/* Configurações do task */}
    <Drawer.Screen 
      name='task/index'                                  
      options={{
          drawerLabel: 'Lista de Tarefas',                 // Altera visualmente o nome da tela no drawer
          title: '',
        }}
    /> 

    {/* Configurações do addtask */}
    <Drawer.Screen 
      name='addtask/index'                                  
      options={{
          drawerLabel: 'Lista de Tarefas',                 // Altera visualmente o nome da tela no drawer
          title: '',
          drawerItemStyle: {display: 'none'},              // Esconde a tela addtask do drawer  
        }}
    /> 


    </Drawer>
)}


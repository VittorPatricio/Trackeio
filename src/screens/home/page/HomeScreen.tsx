import React, {useContext, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../../../colors';
import {SideBar} from '../components/SideBar';
import {SideBarItem} from '../components/SideBarItem';
import {AreaTop} from '../components/AreaTop';
import StartTab from '../tabs/start_tab/StartTab';
import GoalTab from '../tabs/goal_tab/GoalTab';
import SettingsItem from '../components/SettingsItem';
import Settings from '../components/Settings';
import useLogout from '../../../hooks/useLogout';
import { AuthContext } from "../../../context/AuthContext";


export const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [settings, setSettings] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [selectedScreen, setSelectedScreen] = useState('Dashboard');
  const {logout} = useLogout();
  const {user} = useContext(AuthContext);

  const data = [
    {
      id: 1,
      title: 'Dashboard',
      icon: require('../../../../assets/icons/icon1.png'),
    },
    {
      id: 2,
      title: 'Minhas Metas',
      icon: require('../../../../assets/icons/icon2.png'),
    },
    {id: 3, title: 'Sair', icon: require('../../../../assets/icons/icon3.png')},
  ];
  
  const cards = [
    {
      title: 'Saldo Atual',
      value: 'R$ 12.000,00',
      icon: require('../../../../assets/icons/icon1.png'),
      color: "#070707",
    },
    {
      title: 'Receitas',
      value: 'R$ 3.500,00',
      icon: require('../../../../assets/icons/icon2.png'),
      color: '#4CAF50',
    },
    {
      title: 'Despesas',
      value: 'R$ 1.200,00',
      icon: require('../../../../assets/icons/icon3.png'),
      color: '#F44336',
    },
  ];

  const showScreen = (screen: string) => {
    switch(screen){
      case 'Dashboard':
        return <StartTab cards={cards}/>
      case 'Minhas Metas':
        return <GoalTab/>
      default:
        return <StartTab cards={cards}/>
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainLayout}>
        {sideBarOpen && user && (
          <SideBar user={user}>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={true}
              contentContainerStyle={styles.scrollSideContainer}
              renderItem={({item, index}) => (
                <SideBarItem
                  icon={item.icon}
                  title={item.title}
                  key={index}
                  selected={selectedScreen === item.title}
                  onPress={() => setSelectedScreen(item.title)}
                />
              )}
            />
          </SideBar>
        )}
       
        <View style={styles.mainContent}>
          <AreaTop
            search={search}
            setSearch={setSearch}
            isFocus={isFocus}
            setIsFocus={setIsFocus}
            sideBarOpen={sideBarOpen}
            setSideBarOpen={setSideBarOpen}
            title={selectedScreen}
            settings={settings}
            setSettings={setSettings}
          /> 
          
          {settings && (
            <Settings>
            <SettingsItem icon={require('../../../../assets/icons/icon3.png')} title="Sair" onPress={logout} />
          </Settings>
          )}

          <ScrollView 
            style={styles.scrollView}
            showsVerticalScrollIndicator={true} 
            scrollEnabled={true}
            contentContainerStyle={styles.scrollContent}
          >
           {showScreen(selectedScreen)}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  mainLayout: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  scrollSideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    marginTop: 130,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  mainContainerHorizontal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


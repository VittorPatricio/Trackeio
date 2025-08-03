import React, {useState} from 'react';
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
import { FinanceCard } from '../components/FinanceCard';

export const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [selectedScreen, setSelectedScreen] = useState('Inicio');

  const data = [
    {
      id: 1,
      title: 'Inicio',
      icon: require('../../../../assets/icons/icon1.png'),
    },
    {
      id: 2,
      title: 'Metas',
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainLayout}>
        {sideBarOpen && (
          <SideBar>
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
          /> 

          <ScrollView 
            style={styles.scrollView}
            showsVerticalScrollIndicator={true} 
            scrollEnabled={true}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
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
  cardsRow: {
    flexDirection: 'row',
    marginBottom: 24,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  mainContainerHorizontal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const THEME = {
  background: '#080A0D',
  card: '#12161C',
  primary: '#00E887',
  text: '#FFFFFF',
  textMuted: '#A1A1AA',
  border: '#27272A',
};

// --- Dummy Screens ---
const HomeScreen = () => (
  <ScrollView style={styles.screen}>
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Good afternoon,</Text>
        <Text style={styles.title}>Alex</Text>
      </View>
      <View style={styles.avatar} />
    </View>

    <View style={styles.balanceCard}>
      <Text style={styles.balanceLabel}>Total Balance</Text>
      <Text style={styles.balanceAmount}>$124,532.00</Text>
      <View style={styles.balanceActions}>
        <TouchableOpacity style={styles.actionButtonPrimary}>
          <Text style={styles.actionButtonTextDark}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonSecondary}>
          <Text style={styles.actionButtonTextLight}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>

    <Text style={styles.sectionTitle}>Your Assets</Text>
    {['Ethereum (ETH)', 'USD Coin (USDC)', 'Polygon (MATIC)'].map((asset, i) => (
      <View key={i} style={styles.assetRow}>
        <View style={styles.assetIcon} />
        <View style={styles.assetInfo}>
          <Text style={styles.assetName}>{asset}</Text>
          <Text style={styles.assetValue}>${(Math.random() * 10000).toFixed(2)}</Text>
        </View>
      </View>
    ))}
  </ScrollView>
);

const WalletsScreen = () => (
  <ScrollView style={styles.screen}>
    <View style={styles.header}>
      <Text style={styles.title}>Wallets</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Main Vault</Text>
      <Text style={styles.cardSubtitle}>0x71C...976F</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Trading Wallet</Text>
      <Text style={styles.cardSubtitle}>0x42A...11B9</Text>
    </View>
    <TouchableOpacity style={styles.addButton}>
      <Text style={styles.addButtonText}>+ Add Wallet</Text>
    </TouchableOpacity>
  </ScrollView>
);

const SettingsScreen = () => (
  <ScrollView style={styles.screen}>
    <View style={styles.header}>
      <Text style={styles.title}>Settings</Text>
    </View>
    {['Security', 'Preferences', 'Notifications', 'Help & Support'].map((item, i) => (
      <TouchableOpacity key={i} style={styles.settingsRow}>
        <Text style={styles.settingsText}>{item}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home': return <HomeScreen />;
      case 'Wallets': return <WalletsScreen />;
      case 'Settings': return <SettingsScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        {renderScreen()}
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {['Home', 'Wallets', 'Settings'].map((tab) => (
          <TouchableOpacity 
            key={tab} 
            style={styles.navItem} 
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.navText, activeTab === tab && styles.navTextActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  content: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  greeting: {
    color: THEME.textMuted,
    fontSize: 16,
  },
  title: {
    color: THEME.text,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: THEME.card,
    borderWidth: 1,
    borderColor: THEME.border,
  },
  balanceCard: {
    backgroundColor: THEME.card,
    borderRadius: 20,
    padding: 24,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: THEME.border,
  },
  balanceLabel: {
    color: THEME.textMuted,
    fontSize: 14,
  },
  balanceAmount: {
    color: THEME.text,
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 20,
  },
  balanceActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButtonPrimary: {
    flex: 1,
    backgroundColor: THEME.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionButtonSecondary: {
    flex: 1,
    backgroundColor: THEME.background,
    borderWidth: 1,
    borderColor: THEME.border,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionButtonTextDark: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  actionButtonTextLight: {
    color: THEME.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    color: THEME.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  assetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: THEME.border,
  },
  assetIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: THEME.card,
    marginRight: 16,
  },
  assetInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  assetName: {
    color: THEME.text,
    fontSize: 16,
    fontWeight: '500',
  },
  assetValue: {
    color: THEME.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: THEME.border,
  },
  cardTitle: {
    color: THEME.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: THEME.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
  addButton: {
    borderWidth: 1,
    borderColor: THEME.primary,
    borderStyle: 'dashed',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: THEME.primary,
    fontWeight: 'bold',
  },
  settingsRow: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: THEME.border,
  },
  settingsText: {
    color: THEME.text,
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: THEME.card,
    borderTopWidth: 1,
    borderTopColor: THEME.border,
    paddingBottom: 20,
    paddingTop: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  navText: {
    color: THEME.textMuted,
    fontSize: 12,
    marginTop: 4,
  },
  navTextActive: {
    color: THEME.primary,
    fontWeight: 'bold',
  },
});

import { FontAwesome5 } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 11,
          fontStyle: 'italic',
        },
      }}>
      <Tabs.Screen
        name="businesses"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="business-time"
              size={18}
              color={focused ? 'blue' : 'gray'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="hands-helping"
              size={18}
              color={focused ? 'blue' : 'gray'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="users"
              size={18}
              color={focused ? 'blue' : 'gray'}
            />
          ),
          title: 'Utilisateurs',
        }}
      />
    </Tabs>
  )
}

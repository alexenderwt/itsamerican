import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const About = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>It's American! App</Text>
      <Text>Developed by: alexenderwt</Text>
      <Text>Distributed under the GPLv3 license</Text>
      <Text>
        This app is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
        without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
        See the GNU General Public License for more details.
      </Text>
      <Button title="Go to GitHub" onPress={() => Linking.openURL('https://github.com/alexenderwt/itsamerican')} />
    </View>
  );
};

export default About;

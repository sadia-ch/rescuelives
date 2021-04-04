//this is for location access IDONT KNOW WHETHER ITS USEFUL OR NOT IN FUTURE.
import React from 'react';
import { Text, PermissionsAndroid, Alert } from 'react-native';

export default class N extends React.Component {

    constructor(props) {
        super(props);
    }

    async requestLocationPermission() {
        const chckLocationPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
            alert("You've access for the location");
        } else {
            try {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'Cool Location App required Location permission',
                        'message': 'We required Location permission in order to get device location ' +
                            'Please grant us.'
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    alert("You've access for the m location");
                } else {
                    alert("You don't have access for the location");
                }
            } catch (err) {
                alert(err)
            }
        }
    };

    render() {
        return (
            <Text
                onPress={() => this.requestLocationPermission()}>
                Request Location Permission
            </Text>
        )
    }
}
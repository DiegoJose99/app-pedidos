import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loader = ({ loading }) => {
  useEffect(() => {
    let timeout;

    if (loading) {
      timeout = setTimeout(() => {
        // No es necesario utilizar un estado local 'visible'
        // El componente se mostrará automáticamente cuando 'loading' sea true
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
module.exports = {
    preset: 'jest-expo',

    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|expo|@expo|@react-native|react-native|@reduxjs/toolkit|expo-modules-core|@unimodules|unimodules)/"
    ],
};
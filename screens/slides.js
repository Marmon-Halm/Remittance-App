export default [
    {
        id: '1',
        image: require('../assets/img1.png'),
        title: 'TRIP PLANNING',
        description: 'Order a rides based on load type by selecting the vehicle type to transport load',
    },
    {
        id: '2',
        image: require('../assets/img2.png'),
        title: 'ROUTE OPTIMIZATION',
        description: 'Using algorithms to provide best routes for trip to provide the shortest possible time to complete trips',
    },
    {
        id: '3',
        image: require('../assets/img3.png'),
        title: 'Stay worry-free',
        description: 'The safety of your money and information is assured',
    },
    {
        id: '4',
        image: require('../assets/img4.png'),
        title: 'Always be in CONTROL',
        description: "Choose your send & receive method and track your transfer at any time",
    },
]


{/* <View style={styles.container}>


<View style={{ paddingTop: 28, marginBottom: 10 }}>
  <View style={styles.view3}>
  <AntDesign name="arrowleft" size={24} color="black" onPress={() => {
                  navigation.navigate("Login")
              }} />
  </View>
</View>


<View style={{ height: '87%' }}>



  <View>
    <View>
      <Text style={styles.textItsfree}>Sign Up. It's free!</Text>
      <Text style={styles.textCountry}>Country</Text>
    </View>

        <View style={{ flexDirection: 'row', width: '100%', height: '12%', marginBottom: 40, borderBottomWidth: 2, borderBottomColor: '#5F5D5D' }}>

          <View style={{ width: '15%', height: 40, margin: 5, }}>
            <Image source={ghana} style={{ width: '80%', height: '100%' }} />
          </View>

          <View style={{ width: '80%' }} >
            <RNPickerSelect

              style={{
                ...pickerSelectStyles,
                placeholder: {
                  color: 'black'
                },
              }}
              placeholder={{
                label: "Ghana",
                value: 'Ghana',
                color: 'black',

              }}
              placeholderTextColor={'black'}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Nigeria', value: 'Nigeria' },
              ]}

            />
          </View>
        </View>



        <View>
          <Text style={styles.textlogin}>Your login details </Text>
        </View>

        <View>

          <TextInput style={styles.textInput}
            textContentType={"emailAddress"}
            placeholder={'Email Address'}
            autoCapitalize='none'
            autoCorrect={false}
            selectionColor={'#2D9B94'}
            value={email}
            onChangeText={(text) => setEmail(text)}
            minLength={1}
            placeholderTextColor={'black'}
            keyboardAppearance={"light"}
            enablesReturnKeyAutomatically={true}
          />



          <TextInput style={styles.textInput}
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
            inputMode='numeric'
            minLength={1}
            label="PhoneNumber"
            maxLength={12}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            selectionColor={'#2D9B94'}
            keyboardAppearance="light"
            placeholder={'Phone Number'}
            placeholderTextColor={'black'}
          />



          <TextInput style={styles.textInput1}
            textContentType="password"
            secureTextEntry={true}
            label="Password"
            minLength={8}
            selectionColor={'#2D9B94'}
            disabled={!textInputEnabled}
            onChange={enableCheckBox}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder={"Password"}
            placeholderTextColor={'black'}
            keyboardAppearance="light" />
          <Text style={styles.passwordRequire}>
            Your password should be at least 8 characters, and include 1 upper case letter and 1 number
          </Text>
        </View>




  </View>


  <View style={{ flexDirection: 'row', position: 'absolute', bottom: 90, width: '100%', alignItems: 'center' }}>
    <View style={styles.checkboxContainer}>
      <Checkbox
        value={checked}
        onValueChange={checkButtonAndEnableSignUp}
        disabled={!checkboxEnabled}
        onPress={checkButtonAndEnableSignUp}
        color={checked ? '#2D9B94' : undefined}
      />
    </View>
    <Text style={{ fontSize: 15, width: '90%', fontFamily: 'Manrope_400Regular', paddingLeft: 5 }}>
      By submitting this form, you accept NAME's <Text style={{ color: '#2D9B94' }}>Terms and Conditions</Text> and <Text style={{ color: '#2D9B94' }}>Privacy Policy. </Text>
    </Text>
  </View>


  {loading ? (<ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <>
      <View style={{ position: 'absolute', bottom: 5, width: '100%' }}>
        <TouchableOpacity
          style={styles.button}
          disabled={!signUpEnabled}
          onPress={handleCreateAccount}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </>

  )}



</View>







<StatusBar style="dark" />
</View> */}

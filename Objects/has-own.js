const user1 = {
  username: "rpchan",
  subscriptionLevel: "bronze",
  accessPremiumFeature: true
}

const user2 = {
  username: "bcstevens",
  subscriptionLevel: "silver",
  accessPremiumFeature: false
}

function canAccessPremiumFeature(userObj, prop) {
    // return userObj.hasOwnProperty(prop) && userObj[prop]
    return Object.hasOwn(userObj, prop) && userObj[prop] 
}

// console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'))
// console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature')) 


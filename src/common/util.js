// AJLoveChina
module.exports = {
    sleep(millinSeconds) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true)
          }, millinSeconds)
      })
    }
}

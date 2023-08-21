import React from 'react'

const ShortStuff = () => {

    const moreThanFive = (number) => {
        if (number > 5) {
            return true
        } else {
            return false
        }
    }

    const messyStrings = (string1, string2) => {
        return 'I want to eat a ' + string1 + ' cookie with ' + string2
    }

  return (
    <div>ShortStuff</div>
  )
}

export default ShortStuff
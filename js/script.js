// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

let counter = 0
let answer = 0

function myButtonClicked() {

  const firstinputNumber = parseInt(document.getElementById("firstinputNumber").value)
  const secondinputNumber = parseInt(document.getElementById("secondinputNumber").value)

  while (counter < secondinputNumber) {
    answer = answer + firstinputNumber
    counter = counter + 1
  }

  document.getElementById("answer").innerHTML =
    firstinputNumber + " x " + secondinputNumber + " = " + answer
}
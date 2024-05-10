// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

let counter = 0
let answer = 0

function myButtonClicked() {

  const firstNumber = parseInt(document.getElementById("firstNumber").value)
  const secondNumber = parseInt(document.getElementById("secondNumber").value)

  while (counter < secondNumber) {
    answer = answer + firstNumber
    counter = counter + 1
  }

  document.getElementById("answer").innerHTML =
    firstNumber + " x " + secondNumber + " = " + answer
}
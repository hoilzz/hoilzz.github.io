---
layout: post
title: "BOJ 2156 와인 시식"
description: "Dynamic Programming"
tags:
  - "algorithm"
  - "dynamic programming"
comments: true
share: true
date: 2017-6-13
---

# 2156 와인 시식

N개의 포도주 잔이 순서대로 있다.

각 포도주 잔에 양이 주어졌을 때, 가장 많은 양의 포도주를 마실 수 있는 프로그램 구현하자.

규칙은 다음과 같다.

- 연속으로 놓인 3잔은 모두 마실 수 없다.
- 선택된 포도주는 모두 마신다.

## solution 1

`D[i]`는 i번째 까지 포도주 마셨을 때, 최대 양 (`A[i]` : i번째 포도주 양)

이 때, 경우의 수는 2가지다.

1. 마시거나 : `D[i-1] + A[i]`
2. 안마시기 : `D[i-1]`

**근데 이렇게 하면 연속 3잔 마시는 경우를 구분 못한다.**

## solution 2

연속 세잔 마시는 것을 피할 수 있는 경우의 수 3가지

사실 이 3가지 경우의 수는 구했지만.. i-2, i-1, i 값을 생각하지 않았다.

3가지 수에 대해서 `d[i]`를 찾고, 그 다음 4~6번째 수에 대해서 `d[i]`를 찾는 식으로 생각했다. 그러다 보니 이 방법은 틀렸다고 생각하다가 너무 헤맸다..

|i-2 |  i-1  | i  |
|:--:|:--:|:--:|
|O| O | X|
|O| X | O|
|X| O | O|


`D[i]`를 구할 때 위 3가지 경우의 수를 구분하여 최대 값을 저장하면 된다.

```C
// 1,2번은 값이 정해져 있고 for문에 넣으면 복잡해지니까 미리 값을 할당하자.
maxDrink[1] = drinkValues[1];
maxDrink[2] = drinkValues[1] + drinkValues[2];

for(int i = 3; i<=drinkLen; i++){
  maxDrink[i] = maxDrink[i-1];
  if(maxDrink[i] < maxDrink[i-2] + drinkValues[i]){
    maxDrink[i] = maxDrink[i-2] + drinkValues[i];
  }
  if(maxDrink[i] < maxDrink[i-3] + drinkValues[i] + drinkValues[i-1]){
    maxDrink[i] = maxDrink[i-3] + drinkValues[i] + drinkValues[i-1];
  }
}
```

## Summary

DP 문제일 때 작게작게 생각하는건(작은 문제를 해결하고, 이걸 쌓아나가면 큰 문제도 해결된다!!) 이제 반사적으로 된다.
하지만 작게 생각하고 예외사항이 나왔을 때 너무 머리가 안굴러간다..
2번째 방법을 유추해냈을 때, 이 방법을 통해 어떻게 큰 문제를 해결하지..? 1번 인덱스부터 해볼까? 이런 생각을 했어야 했는데.. 걍 3개씩 하니까 안되네.. 이러고 말아버린게 틀린 이유같다.. 어떤 아이디어가 나오면 작게 해결할 방법을 찾자!! 점화식처럼 i=1부터라도 해보자!

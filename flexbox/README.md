# Flexbox

드림코딩 by 엘리의 [CSS Flexbox 완전 정리](https://www.youtube.com/watch?v=7neASrWEFEM)를 보고 정리한 코드입니다.

## Container에 적용할 수 있는 속성

- display
  ```css
  display: flex;
  ```
- flex-direction
  ```css
  flex-direction: row;
  ```
  flex의 방향(중심축)을 지정한다.
  - row: 열 방향(기본값)
  - row-reverse: 아이템 순서를 거꾸로 바꾼 열 방향
  - column: 행 방향
  - column-reverse: 아이템 순서를 거꾸로 바꾼 행 방향
- flex-wrap
  ```css
  flex-wrap: nowrap;
  행/열에 아이템을 어떻게 나열할 것인지 방법을 지정한다.
  ```
  - nowrap: 아이템들이 한 줄에 꽉 차게 되도 모두 한 줄에 표현한다.(기본값)
  - wrap: 아이템들이 한 줄에 꽉 차면 자동으로 넘친 아이템들이 다음 행/열로 넘어간다.
  - wrap-reverse: wrap과 동일하나 넘친 아이템들이 거꾸로 배치된다.
- flex-flow
  ```css
  flex-flow: column nowrap;
  ```
  flex-direction과 flex-wrap을 한 번에 지정할 수 있게 한다.
- justify-content

  ```css
  justify-content: flex-start;
  ```

  아이템들의 순서는 유지하고, 아이템을 **중심축**을 기준으로 어떻게 배치할 것인지 지정한다.  
  flex-direction에 따라 수평/수직 정렬 기준이 달라진다.

  - flex-start: 왼쪽/상단 정렬
  - flex-end: 오른쪽/하단 정렬
  - center: 가운데 정렬
  - space-????: 컨테이너를 모두 채울 수 있게 아이템간 간격을 띄워준다.
    - space-around: 중간 간격은 모두 같으나 가장 왼쪽/상단/오른쪽/하단이 중간간격보다 작다.
    - space-evenly: 가장 왼쪽/상단/오른쪽/하단, 중간 간격이 모두 동일하다.
    - space-between: 가장 왼쪽/상단/오른쪽/하단 간격은 0이고 중간 간격만 동일하다.

- align-content
  **반대축**을 기준으로 아이템들을 어떻게 배치할지 지정한다.
  - flex-around
  - flex-end
  - center
  - space-around
  - space-evenly
  - space-between
  ```
  align-content: space-between;
  ```
- align-items

  ```
  align-items: center;
  ```

  **반대축**을 기준으로 아이템들을 텍스트에 맞게 정렬한다.

  - baseline: 텍스트의 [베이스라인](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_vertical-align)에 맞춰서 아이템을 정렬한다.

## Item에 적용할 수 있는 속성

- order
  ```css
  order: 3;
  ```
  아이템의 순서를 바꿀 수 있다. (1 ~ n)
- **flex-grow**
  ```css
  flex-grow: 0; /*기본값*/
  ```
  컨테이너를 늘려서 아이템이 자신의 고유 길이보다 커졌을 때,  
  아이템간 너비/높이 비율을 지정한다.  
  값(0~n)이 높을 수록 너비/높이가 크다.
- flex-shrink

  ```css
  flex-shrink: 0; /*기본값*/
  ```

  컨테이너를 줄여서 아이템이 자신의 고유 길이보다 작아졌을 때,
  아이템간 너비/높이 비율을 지정한다.
  값(0~n)이 높을 수록 너비/높이가 작다.

- flex-basis:

  ```css
  flex-basis: auto; /*기본값*/
  flex-baiss: 50%;
  ```

  아이템의 너비/높이를 컨테이너 기준 퍼센트 비율로 지정한다.

- flex

  ```css
  flex: 2 2 auto; /*grow, shrink, basis*/
  ```

  flex-grow, flex-shrink, flex-basis를 축약형으로 사용할 때 쓴다.

- align-self

  ```css
  align-self: center;
  ```

  컨테이너 레벨에서 justify-content, align-items, align-content를 통해  
  모든 아이템들을 배치했다면, align-self를 통해서 반대축을 기준으로 **아이템 별로** 정렬할 수 있다.

## 중심축과 반대축 ( Main Axis and Cross Axis)

- 수직선과 수평선이 있다.
- 중심축이 수평선이면 반대축은 수직선, 중심축이 수직선이면 반대축은 수평선이다.
- 축에 맞춰서 item들이 정렬된다.

## Flexbox 연습해보기

https://flexboxfroggy.com/

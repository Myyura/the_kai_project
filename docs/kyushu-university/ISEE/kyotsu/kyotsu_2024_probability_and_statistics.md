---
sidebar_label: "2024年度 確率・統計"
sidebar_position: 1
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2024年度 確率・統計

## **Author**
Casablanca, 祭音Myyura

## **Description**
箱の中に $N_1$ 個の白いボールと $N_2$ 個の黒いボールがあり, その総数を $N = N_1 + N_2$ とする。この箱から $2$ つのボールをランダムに選び, 両方が白いボールである確率は $1/2$ であるとする。

(1) $N_2$ が奇数のとき $N_1$ の最小値を求めよ。

(2) $N_2$ が偶数のとき $N_1$ の最小値を求めよ。

(3) $N$ を値の小さい順に $3$ つ求めよ。

-----------------------

A box contains $N_1$ white and $N_2$ black balls, and the total number of balls is $N = N_1 + N_2$.
When two balls are randomly drawn from the box, the probability that both balls are white is $1/2$.

(1) Find the minimum value of $N_1$ when $N_2$ is an odd number.

(2) Find the minimum value of $N_1$ when $N_2$ is an even number.

(3) Find the three smallest values of $N$.


## **Kai** 
Let $A$ denote the event "both balls are white", then we have

$$
P(A) = \frac{\binom{2}{N_1}}{\binom{2}{N_1+N_2}} = \frac{N_1(N_1 - 1)}{(N_1 + N_2)(N_1 + N_2 - 1)}
$$

Since $P(A) = \frac{1}{2}$, we have

$$
N_1^2 - N_1 - 2N_1N_2 - N_2^2 + N_2 = 0
$$

### (1)
Let $N_2 = 2k + 1$. Then we have

$$
N_1^2 - (4k + 3)N_1 + (2k + 1) - (2k + 1)^2 = 0
$$

from which we have

$$
N_1 = \frac{4k + 3 \pm \sqrt{8(2k + 1)^2 + 1}}{2} \tag{i}
$$

when $k = 0$, $N_1$ get the minimum value $3$.

### (2)
Let $N_2 = 2k$. Then we have

$$
N_1^2 - (4k + 1)N_1 + 2k - 4k^2 = 0
$$

from which we get 

$$
N_1 = \frac{4k + 1 \pm \sqrt{32k^2 + 1}}{2} \tag{ii}
$$

when $k = 3$, $N_1$ get the minimum value $15$.

### (3)
From (i) and (ii) , we easily know that the larger $N_1$, the larger $N_2$ we have and $8N_2^2 + 1$ must be a number of squares.

Let $8N_2^2 + 1 = K^2$, we have $8N_2^2 = (K - 1)(K + 1)$, which implies that $K$ is odd.

Let $K = 2p + 1$. Then we have $2N_2^2 = p(p+1)$.
Easy to find that $p = 1$, $p = 8$ and $p = 49$ are three solutions and the corresponding value of $N$ is $4$, $21$ and $120$. 

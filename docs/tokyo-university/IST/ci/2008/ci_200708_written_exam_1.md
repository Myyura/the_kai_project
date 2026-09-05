---
sidebar_label: 2007年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Mathematics.Number-Theory.Divisor-Counting-Function
  - Mathematics.Number-Theory.Prime-Factorization
  - Computer-Science.Algorithm-Design.Backtracking
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2007年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Let $N$ be the number of divisors of a positive integer $J$. Let us compute the smallest $J$ for a given $N$. Note that $J$ and $1$ are included among the divisors of $J$.

(1) Calculate the smallest $J$ each for $N=5$ and $N=8$.

(2) Let $J$ be prime factorized as
$$J=\prod_{i=0}^{k-1}p_i^{a_i}$$
where $p_i$s are mutually different prime numbers and $a_i$s are positive integers for $0\le i<k$. Describe $N$ in a mathematical formula.

(3) When $N$ is odd, what kind of number is $J$?

(4) Based on (2), describe the outline of a method to compute the smallest $J$ given $N$. Moreover, describe ways to decrease computational complexity.

(5) Calculate the smallest $J$ for $N=24$.

### 题目描述

设正整数 $J$ 的正因数个数为 $N$，其中 $1$ 和 $J$ 本身也计入。现要对给定的 $N$ 求满足条件的最小 $J$。

1. 分别在 $N=5$ 和 $N=8$ 时求最小的 $J$。
2. 若

   $$
   J=\prod_{i=0}^{k-1}p_i^{a_i},
   $$

   其中 $p_i$ 是两两不同的素数，$a_i$ 对 $0\le i<k$ 均为正整数，写出 $N$ 的数学表达式。
3. 当 $N$ 为奇数时，$J$ 必须是哪一类数？
4. 根据第 2 问，概述由给定 $N$ 求最小 $J$ 的方法，并说明如何降低计算复杂度。
5. 求 $N=24$ 时最小的 $J$。


## **Kai**

### (1)

$N=5$ のとき、5は素数なので $J=p^4$ に限られ、最小は $\boxed{16}$ である。$N=8$ では指数の候補は $(7),(3,1),(1,1,1)$ であり、最小の素数から割り当てるとそれぞれ $128,24,30$ となる。よって $\boxed{J=24}$。

### (2)

$J$ の各正の約数は $\prod_i p_i^{b_i}$（$0\le b_i\le a_i$）と一意に書ける。各指数の選び方は独立に $a_i+1$ 通りだから、

$$\boxed{N=\prod_{i=0}^{k-1}(a_i+1)}.$$

$J=1$ の場合は空積を1とする。

### (3)

$N$ が奇数なら各 $a_i+1$ が奇数、従って各 $a_i$ が偶数である。ゆえに $\boxed{J\text{ は完全平方数}}$。逆も成立する。$J=1$ も含まれる。

### (4)

最小解では小さい素数から順に使い、指数は非増加 $a_0\ge a_1\ge\cdots\ge1$ にできる。未使用の小さい素数があれば置き換えるだけで $J$ が減り、$p<q$ に $a<b$ を割り当てていれば、交換後と交換前の比は $(p/q)^{b-a}<1$ となるからである。

したがって $N$ の乗法的分割

$$N=d_0d_1\cdots d_{k-1},\quad d_0\ge d_1\ge\cdots\ge2$$

を列挙し、$J=2^{d_0-1}3^{d_1-1}\cdots p_{k-1}^{d_{k-1}-1}$ の最小値を取る。各因子は2以上なので深さは $\lfloor\log_2N\rfloor$ 以下である。残りの積の約数だけを候補とし、因子を非増加にして重複を避け、途中の積が既知の最良値以上になった枝は打ち切る。

```python
def smallest_with_n_divisors(N):
    if N < 1:
        raise ValueError('N must be positive')
    if N == 1:
        return 1
    primes = []
    candidate = 2
    while len(primes) < N.bit_length() - 1:
        if all(candidate % p for p in primes if p * p <= candidate):
            primes.append(candidate)
        candidate += 1

    best = 2 ** (N - 1)  # always a feasible initial upper bound

    def search(remaining, max_factor, depth, value):
        nonlocal best
        if remaining == 1:
            best = min(best, value)
            return
        if depth == len(primes):
            return
        p = primes[depth]
        power = p
        for d in range(2, min(remaining, max_factor) + 1):
            new_value = value * power  # p ** (d - 1)
            if new_value >= best:
                break
            if remaining % d == 0:
                search(remaining // d, d, depth + 1, new_value)
            power *= p

    search(N, N, 0, 1)
    return best
```

上の実装は簡明さのため候補 $d$ を走査している。実用上は $N$ を素因数分解し、各 `remaining` の約数一覧を生成・再利用すれば無駄な走査を減らせる。巨大な $N$ では整数そのものの桁数も大きくなるため、指数探索が単純な $J=1,2,\ldots$ の全探索より効率的であっても、定数時間で解けるわけではない。

### (5)

$24$ の非増加な乗法的分割を全て調べる。

| $(d_0,d_1,\ldots)$ | 最小の $J$ |
|---|---|
| $(24)$ | $2^{23}=8388608$ |
| $(12,2)$ | $2^{11}3=6144$ |
| $(8,3)$ | $2^7 3^2=1152$ |
| $(6,4)$ | $2^5 3^3=864$ |
| $(6,2,2)$ | $2^5 3\cdot5=480$ |
| $(4,3,2)$ | $2^3 3^2 5=360$ |
| $(3,2,2,2)$ | $2^2 3\cdot5\cdot7=420$ |

最小は $\boxed{360}$。実際 $360=2^3 3^2 5$ の約数個数は $(3+1)(2+1)(1+1)=24$ である。

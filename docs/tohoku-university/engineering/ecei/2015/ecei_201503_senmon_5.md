---
sidebar_label: 2015年3月実施 専門科目 問題5 計算機2
tags:
  - Tohoku-University
  - Computer-Science.Programming.Recursion
  - Computer-Science.Algorithm-Design
---

# 東北大学 工学研究科 電気・情報系 2015年3月実施 専門科目 問題5 計算機2

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

Fig. 5 に示す再帰関数 $f$ を考える。ここで，入力 $x$ と $y$ は任意の正の整数である。関数 $\operatorname{div}(x,y)$ は，$x$ を $y$ で割った商を整数で返し，$\operatorname{mod}(x,y)$ は，$x$ を $y$ で割った余りを整数で返す。演算子 ‘−’ と ‘*’ は，整数の減算と乗算を各々表す。また，式 “if $e_1=e_2$ then $e_3$ else $e_4$” の値は，$e_1$ の値が $e_2$ の値に等しければ $e_3$ の値に，そうでなければ $e_4$ の値に等しい。以下の問に答えよ。

(1) $f(2,7)$ を計算せよ。計算の過程も示すこと。

(2) $f(x,y)$ の計算が停止することを示せ。

(3) $f(x,y)$ を計算するために必要な再帰関数呼び出しの回数を $y$ に関するオーダで示せ。その根拠も説明せよ。

(4) $f(x,y+1)$ の値は $x*f(x,y)$ の値と等しいことを示せ。

```text
f(x,y) =
    if y=1 then x
    else if mod(y,2)=0 then f(x*x,div(y,2))
    else x*f(x,y-1)
```

### 题目描述

输入 $x,y$ 为正整数，`div` 和 `mod` 分别表示整数商与余数。

```text
f(x, y) =
    if y == 1 then x
    else if mod(y, 2) == 0 then f(x*x, div(y, 2))
    else x * f(x, y-1)
```

1. 计算 $f(2,7)$，写出过程。
2. 证明计算终止。
3. 用 $y$ 表示递归调用次数的渐近阶，并证明。
4. 证明 $f(x,y+1)=x f(x,y)$。

## **Kai**

### (1)

$$
\begin{aligned}
f(2,7)&=2f(2,6)=2f(4,3)\\
&=2\cdot4f(4,2)=2\cdot4f(16,1)=\boxed{128}.
\end{aligned}
$$

### (2)

$y>1$ 时，下一调用的第二参数为 $y/2$ 或 $y-1$，都是小于 $y$ 的正整数，故必到达 $y=1$ 而终止。

### (3)

偶数参数减半；奇数参数先减 $1$，下一步再减半。故每至多两次递归，第二参数至少减半，调用次数为 $O(\log y)$；而每步最多使二进制位数减少 $1$，所以也是 $\Omega(\log y)$。

更精确地，计入初始调用，总调用数为

$$
\boxed{C(y)=\lfloor\log_2 y\rfloor+\operatorname{popcount}(y)},
$$

其中 `popcount` 表示二进制表示中 $1$ 的个数。因此为 $\Theta(1+\log y)$。这仅统计调用次数，未把大整数乘法视为常量时间来估计位运算复杂度。

### (4)

对 $y$ 作强归纳证明 $f(x,y)=x^y$。$y=1$ 成立；偶数 $y=2k$ 时

$$
f(x,2k)=f(x^2,k)=(x^2)^k=x^{2k};
$$

奇数 $y>1$ 时

$$
f(x,y)=xf(x,y-1)=x^y.
$$

因此 $\boxed{f(x,y+1)=x^{y+1}=xf(x,y)}$。

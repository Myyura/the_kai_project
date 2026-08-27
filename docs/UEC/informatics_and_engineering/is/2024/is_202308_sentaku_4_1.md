---
sidebar_label: 2023年8月実施 選択問題 計算機工学 4-1
tags:
  - University-of-Electro-Communications
  - Computer-Science.Formal-Languages.Deterministic-Finite-Automaton
  - Computer-Science.Formal-Languages.Context-Free-Grammar
---

# 電気通信大学 情報理工学研究科 情報学専攻 2023年8月実施 選択問題 計算機工学 4-1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 問1 有限オートマトン

1. 語 `babba` の接頭辞をすべて書け。
2. $\Sigma=\{a,b\}$ 上の言語 $L=\{a,bb,bab\}$ を受理する有限オートマトンを構成せよ。
3. $L$ の各語の全接頭辞からなる言語 $K$ を受理する有限オートマトンを構成せよ。
4. $K$ のオートマトンを変形して $L$ のオートマトンを構成する方法を述べよ。
5. $\Sigma^*$ の任意の有限部分集合が正則言語であることを証明せよ。

### 問2 文脈自由言語

$$
L=\{a^k\mid k\text{ は素数}\}
$$

について、長さ $10$ 以下の語をすべて書け。さらに文脈自由言語のポンプの補題を用い、$L$ が文脈自由言語でないことを証明せよ。

### 题目描述

构造接受有限语言及其前缀闭包的有限自动机，并证明所有有限语言都是正则语言；再用上下文无关语言的抽引引理证明长度为素数的一元语言不是上下文无关语言。

## **Kai**

### 問1

#### (1)

$$
\boxed{\varepsilon, b, ba, bab, babb, babba}.
$$

#### (2)

開始状態を $q_\varepsilon$、死状態を $q_d$ とする。受理状態は $q_a,q_{bb},q_{bab}$ であり、遷移は次のとおりである。

| 状態 | $a$ | $b$ | 受理 |
|---|---|---|:---:|
| $q_\varepsilon$ | $q_a$ | $q_b$ | |
| $q_a$ | $q_d$ | $q_d$ | $\checkmark$ |
| $q_b$ | $q_{ba}$ | $q_{bb}$ | |
| $q_{ba}$ | $q_d$ | $q_{bab}$ | |
| $q_{bb}$ | $q_d$ | $q_d$ | $\checkmark$ |
| $q_{bab}$ | $q_d$ | $q_d$ | $\checkmark$ |
| $q_d$ | $q_d$ | $q_d$ | |

#### (3)

$$
K=\{\varepsilon,a,b,ba,bb,bab\}.
$$

(2) と同じ遷移を用い、受理状態を

$$
\boxed{q_\varepsilon,q_a,q_b,q_{ba},q_{bb},q_{bab}}
$$

とすればよい。

#### (4)

接頭辞木型のオートマトンで、$L$ の語そのものに対応する状態

$$
q_a, q_{bb}, q_{bab}
$$

だけを受理状態とし、他の接頭辞状態を非受理状態に変更する。

#### (5)

有限言語 $L$ の全接頭辞の集合を $K$ とする。$K$ は有限である。状態集合を $K\cup\{q_d\}$ とし、

$$
\delta(u,c)=
\begin{cases}
uc,&uc\in K,\\
q_d,&uc\notin K,
\end{cases}
\qquad
\delta(q_d,c)=q_d
$$

と定め、受理状態を $L$ に対応する状態とすればよい。これは有限オートマトンなので、$L$ は正則言語である。

### 問2

#### (1)

$$
\boxed{a^2, a^3, a^5, a^7}.
$$

#### (2)

$L$ が文脈自由言語であると仮定し、ポンプ長を $p$ とする。$p$ 以上の素数 $k$ を選び、$z=a^k\in L$ とする。

補題により

$$
z=uvwxy,\qquad |vx|\ge1,\qquad |vwx|\le p
$$

と分解できる。$vx=a^r$ とおけば $r\ge1$ である。$i=k+1$ としてポンプすると、

$$
uv^{k+1}wx^{k+1}y
$$

に含まれる $a$ の個数は

$$
k+k(|v|+|x|)=\boxed{k(r+1)}
$$

である。これは $k>1,r+1>1$ の積なので素数でなく、ポンプ後の語は $L$ に属さない。補題に矛盾するから

$$
\boxed{L\text{ は文脈自由言語ではない}}.
$$

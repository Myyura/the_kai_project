---
sidebar_label: "2017年8月実施 情報基礎 問題2"
tags:
  - Ochanomizu-University
  - Computer-Science.Information-Theory.Self-Information-Axioms
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Kullback-Leibler-Divergence
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2017年8月実施 情報基礎 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

1. 生起する事象を $a$ としたとき、情報量 $I(a)$ の定義式を示せ。
2. 情報量の定義がその形で表される理由を説明せよ。
3. 互いに排反な事象 $a_1,\ldots,a_n$ の生起確率を $p(a_1),\ldots,p(a_n)$ とし、$\sum_{i=1}^n p(a_i)=1$ とする。平均情報量 $H$ の定義式を示し、その意味を説明せよ。
4. 同じ条件で $H$ が最小となる確率分布と、その最小値を求めよ。
5. 同じ条件で $H$ が最大となる確率分布と、その最大値を求めよ。

### 题目描述

定义事件的自信息并说明对数形式的理由；定义互斥完备事件组的平均信息量（熵），求熵的最小、最大值及达到它们的概率分布。

## **Kai**

### (1)

事象 $a$ の生起確率を $p(a)$ とすると、自己情報量は

$$
\boxed{I(a)=-\log_2p(a)=\log_2\frac1{p(a)}}
$$

で定義され、単位は bit である。

### (2)

起こりにくい事象ほど情報量を大きくし、独立な事象 $a,b$ について情報量を加法的にすることが要請される。すなわち

$$
I(a\cap b)=I(a)+I(b),
\qquad p(a\cap b)=p(a)p(b).
$$

積を和へ変える連続な関数は対数であり、確率が小さいほど値を大きくするため負号を付ける。底 $2$ は単位を bit とする選択である。

### (3)

$p_i=p(a_i)$ とおく。平均情報量、すなわちエントロピーは

$$
\boxed{H=\sum_{i=1}^np_iI(a_i)
=-\sum_{i=1}^np_i\log_2p_i}
$$

である。これは一回の試行で得られる自己情報量の期待値であり、結果の不確実さの平均を表す。ここで $0\log_2 0=0$ とする。

### (4)

各項 $-p_i\log_2p_i$ は非負である。ある一つの事象が確率 $1$、他が確率 $0$ で生起するとき全項が $0$ となるので

$$
\boxed{H_{\min}=0\ \text{bit}}.
$$

これは結果が確定しており、不確実さがない場合である。

### (5)

一様分布 $u_i=1/n$ に対する相対エントロピーの非負性から

$$
0\le D(p\|u)
=\sum_{i=1}^np_i\log_2\frac{p_i}{1/n}
=\log_2n-H.
$$

等号は $p_i=1/n$（$i=1,\ldots,n$）のときに限る。したがって

$$
\boxed{p(a_i)=\frac1n\ (1\le i\le n),
\qquad H_{\max}=\log_2n\ \text{bit}}.
$$

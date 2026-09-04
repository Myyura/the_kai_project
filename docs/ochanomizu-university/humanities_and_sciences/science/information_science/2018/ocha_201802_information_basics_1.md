---
sidebar_label: "2018年2月実施 情報基礎 問題1"
tags:
  - Ochanomizu-University
  - Discrete-Mathematics.Set-Theory
  - Discrete-Mathematics.Mathematical-Logic.Predicate-Logic
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2018年2月実施 情報基礎 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下のそれぞれの言明の正誤を、理由とともに答えよ。

### (1)

$X,Y$ が空集合のとき、$X$ から $Y$ への写像は存在しない。

### (2)

$X$ が空集合であり、$X$ から $Y$ への写像が存在するとき、$Y$ は空集合である。

### (3)

一階命題論理の論理式からなる集合は有限集合である。

### (4)

$\models$ は意味論的推論として妥当ではない。

### (5)

$\varphi_1,\ldots,\varphi_n$ が一階命題論理の論理式であるとき、

$$
\varphi_1,\ldots,\varphi_n\models
$$

ならば、$\varphi_1,\ldots,\varphi_n$ のうち少なくとも一つは矛盾式である。

### (6)

$\varphi,\psi$ が一階命題論理の論理式であるとき、

$$
\models\varphi\to\psi
\quad\text{と}\quad
\varphi\models\psi
$$

は同等である。

### (7)

$\varphi,\psi,\chi$ が一階命題論理の論理式であるとき、

$$
\varphi\to\psi,\ \chi\lor\neg\varphi
\models\neg\varphi\land\chi
$$

が成立する。

### (8)

一階命題論理の論理式には、恒真式であるか否かを有限ステップの計算で判定することができない式が存在する。これを不完全性定理という。

### 题目描述

判断八个关于空集上的映射、一阶逻辑公式集合、语义蕴涵、矛盾式、语义演绎以及一阶逻辑可判定性的命题是否正确，并说明理由。

## **Kai**

### (1) 誤り

空写像

$$
\varnothing\to\varnothing
$$

がただ一つ存在する。

### (2) 誤り

任意の集合 $Y$ に対して空写像 $\varnothing\to Y$ が存在する。例えば $Y=\{0\}$ とすれば反例になる。

### (3) 誤り

一階論理の論理式全体は無限集合である。例えば論理式 $\varphi$ から

$$
\varphi,\quad\neg\varphi,\quad\neg\neg\varphi,\quad\ldots
$$

と無限に異なる論理式を作れる。

### (4) 正しい

ここで $\models$ は記号自体ではなく、前提も結論も空の意味論的推論を表す。空の前提は任意の解釈で満たされるが、空の結論には真となる論理式が一つもない。したがって、この推論は妥当ではない。

### (5) 誤り

論理式の集合が全体として充足不能でも、各論理式が単独で矛盾式とは限らない。例えば

$$
p,\neg p\models
$$

であるが、$p$ も $\neg p$ もそれ自体は矛盾式でない。

### (6) 正しい

任意の解釈について、$\varphi\to\psi$ が真であることは、$\varphi$ が真ならば $\psi$ も真であることと同値である。ゆえに意味論的演繹定理

$$
\boxed{\models\varphi\to\psi\iff\varphi\models\psi}
$$

が成り立つ。

### (7) 誤り

$\varphi,\psi,\chi$ を全て真とする解釈では、前提 $\varphi\to\psi$ と $\chi\lor\neg\varphi$ はともに真であるが、結論 $\neg\varphi\land\chi$ は偽である。

### (8) 誤り

一階述語論理の恒真性について全ての論理式を有限ステップで判定する一様なアルゴリズムは存在しないが、これは Church の決定不能性定理に関する事実である。不完全性定理は、十分に強い無矛盾な形式体系では証明も反証もできない命題が存在するという別の定理である。

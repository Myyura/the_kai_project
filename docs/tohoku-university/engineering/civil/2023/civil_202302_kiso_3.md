---
sidebar_label: "2023年2月実施 基礎科目 [3] 確率統計"
tags:
  - Tohoku-University
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Bayes-Theorem
---
# 東北大学 工学研究科 土木工学専攻 2023年2月実施 基礎科目 \[3\] 確率統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 1

下記に示す条件の4つの箱がある。

- 第1の箱には2000個の部品が入っており，そのうち5%が不良品である。
- 第2の箱には500個の部品が入っており，そのうち35%が不良品である。
- 第3と第4の箱には，それぞれ1000個の部品が入っており，そのうち20%が不良品である。

ここで，箱をランダムに1つ選び，選んだ箱からランダムに1個の部品を取り出す。

(1) 取り出した部品が不良品である確率を計算せよ。

(2) 取り出した部品が不良品であることが分かった。この時，その不良品が第2の箱から取り出されている確率を計算せよ。

### 2

下記の条件に従って矩形（長方形または正方形）の面積を計算する。

- 縦と横の真の寸法はそれぞれ $\mu_x,\mu_y$，真の面積は $A=\mu_x\mu_y$ である。
- 縦と横の計測値（観測誤差を含んでいる）を用いて面積を推定する。
- $n$ 回の寸法計測に基づいて，下記の2つの面積推定量 $A_a,A_b$ を計算する。

$$
A_a=\frac1n\sum_{i=1}^nX_iY_i,\qquad A_b=\overline X\,\overline Y
$$

ここで $\overline X=\dfrac1n\sum_{i=1}^nX_i,\overline Y=\dfrac1n\sum_{i=1}^nY_i$ である。なお $(X_i,Y_i)$ は計測された寸法の組（縦，横）を表す。

以上を踏まえて，縦と横の計測値を確率変数 $X,Y$，両者の積を $Z=XY$ とする。$X$ と $Y$ の平均は $\mu_x$ と $\mu_y$，分散は $\sigma_x^2$ と $\sigma_y^2$ である。また，$(X_i,Y_i)$ は無作為抽出，$X$ と $Y$ は互いに独立である時，以下の問いに答えよ。

(1) $A_a$ と $A_b$ は共に面積 $A$ の不偏推定量であることを示せ。

(2) $Z$ の分散 $E[(Z-A)^2]$ を $\mu_x,\mu_y,\sigma_x^2,\sigma_y^2$ を用いて表わせ。

(3) $A_a$ の分散 $E[(A_a-A)^2]$ を $\mu_x,\mu_y,\sigma_x^2,\sigma_y^2,n$ を用いて表わせ。

(4) $A_b$ の分散 $E[(A_b-A)^2]$ を $\mu_x,\mu_y,\sigma_x^2,\sigma_y^2,n$ を用いて表わせ。

(5) $\mu_x=\mu_y=1,\sigma_x^2=\sigma_y^2=0.5,n=10$ の時，推定量 $A_a,A_b$ の分散比を計算せよ。

### 题目描述

**1** 有四个箱子，条件如下。

- 第1个箱子装有2000个零件，其中5%为不良品。
- 第2个箱子装有500个零件，其中35%为不良品。
- 第3和第4个箱子各装有1000个零件，其中20%为不良品。

随机选择一个箱子，再从所选箱子中随机取出一个零件。

(1) 计算取出的零件是不良品的概率。

(2) 已知取出的零件是不良品，计算该不良品来自第2个箱子的概率。

**2** 按下列条件计算矩形（长方形或正方形）的面积。

- 纵向、横向的真实尺寸分别为 $\mu_x,\mu_y$，真实面积为 $A=\mu_x\mu_y$。
- 用纵向、横向的测量值（含观测误差）估计面积。
- 根据 $n$ 次尺寸测量，计算下列两个面积估计量：

$$
A_a=\frac1n\sum_{i=1}^nX_iY_i,\qquad A_b=\overline X\,\overline Y,
$$

其中 $\overline X=\dfrac1n\sum_{i=1}^nX_i,\overline Y=\dfrac1n\sum_{i=1}^nY_i$，$(X_i,Y_i)$ 表示测得的一组尺寸（纵向、横向）。

在上述条件下，用随机变量 $X,Y$ 表示纵向、横向测量值，用 $Z=XY$ 表示两者的乘积。$X,Y$ 的均值分别为 $\mu_x,\mu_y$，方差分别为 $\sigma_x^2,\sigma_y^2$。当 $(X_i,Y_i)$ 为随机抽样，且 $X,Y$ 相互独立时，回答下列问题。

(1) 证明 $A_a,A_b$ 都是面积 $A$ 的无偏估计量。

(2) 用 $\mu_x,\mu_y,\sigma_x^2,\sigma_y^2$ 表示 $Z$ 的方差 $E[(Z-A)^2]$。

(3) 用 $\mu_x,\mu_y,\sigma_x^2,\sigma_y^2,n$ 表示 $A_a$ 的方差 $E[(A_a-A)^2]$。

(4) 用 $\mu_x,\mu_y,\sigma_x^2,\sigma_y^2,n$ 表示 $A_b$ 的方差 $E[(A_b-A)^2]$。

(5) 当 $\mu_x=\mu_y=1,\sigma_x^2=\sigma_y^2=0.5,n=10$ 时，计算估计量 $A_a,A_b$ 的方差比。

## **Kai**
### 1.
#### (1)

$$
\begin{aligned}
\frac{1}{4} \cdot \frac{5}{100}
+ \frac{1}{4} \cdot \frac{35}{100}
+ \frac{2}{4} \cdot \frac{20}{100}
&= \frac{1}{5}
\end{aligned}
$$

#### (2)
取り出された部品が箱2からのものでかつ不良品である確率は

$$
\begin{aligned}
\frac{1}{4} \cdot \frac{35}{100} = \frac{7}{80}
\end{aligned}
$$

であるから、求める条件付き確率は

$$
\begin{aligned}
\frac{\frac{7}{80}}{\frac{1}{5}} = \frac{7}{16}
\end{aligned}
$$

である。

### 2.
#### (1)
独立性より $E[X_iY_i]=\mu_x\mu_y=A$ であり、$\bar X$ と $\bar Y$ も独立なので、

$$
E[A_a]=E[A_b]=A.
$$

#### (2)
$Z=XY$ とすると、

$$
\operatorname{Var}(Z)
=(\sigma_x^2+\mu_x^2)(\sigma_y^2+\mu_y^2)-\mu_x^2\mu_y^2
=\sigma_x^2\sigma_y^2+\mu_y^2\sigma_x^2+\mu_x^2\sigma_y^2.
$$

#### (3)
各組は独立であるから、

$$
\operatorname{Var}(A_a)=\frac{\sigma_x^2\sigma_y^2+\mu_y^2\sigma_x^2+\mu_x^2\sigma_y^2}{n}.
$$

#### (4)
(2) を $\bar X,\bar Y$ に適用すると、

$$
\operatorname{Var}(A_b)=\frac{\sigma_x^2\sigma_y^2}{n^2}+\frac{\mu_y^2\sigma_x^2+\mu_x^2\sigma_y^2}{n}.
$$

#### (5)
指定値では $\operatorname{Var}(A_a)=1/8$、$\operatorname{Var}(A_b)=41/400$ なので、

$$
\boxed{\frac{\operatorname{Var}(A_a)}{\operatorname{Var}(A_b)}=\frac{50}{41}\simeq1.22}.
$$

この条件では $A_b$ の方が分散が小さい。

## **Reference**

- [東北大学 土木系 2023年春季 基礎科目（PDF）](https://www.civil.tohoku.ac.jp/admission/img/2023_spring_BasicSubjectsJ.pdf)

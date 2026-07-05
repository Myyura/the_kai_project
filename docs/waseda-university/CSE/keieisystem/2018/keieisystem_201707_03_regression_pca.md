---
sidebar_label: "2017年7月実施 統計科学 問題3"
tags:
  - Waseda-University
  - Probability-Statistics.Statistical-Inference.Least-Squares-Method
  - Probability-Statistics.Statistical-Inference.Multiple-Regression
  - Probability-Statistics.Statistical-Inference.Multicollinearity
  - Data-Science-Artificial-Intelligence.Data-Science.Principal-Component-Analysis
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2017年7月実施 統計科学 問題3

## **Author**
祭音Myyura

## **Description**

1. 切片を持たない重回帰モデル

   $$
   y_i=\beta_1x_{1i}+\beta_2x_{2i}+\varepsilon_i
   $$

   に対し、

   $$
   a=\sum x_{1i}^2,\quad b=\sum x_{1i}x_{2i},\quad
   c=\sum x_{2i}^2,\quad d=\sum x_{1i}y_i,\quad
   e=\sum x_{2i}y_i
   $$

   とする。$ac\neq b^2$ のもとで $\beta_1,\beta_2$ の最小二乗推定量を求めよ。
2. 多重共線性を説明せよ。
3. 標準化された2変量 $x_1,x_2$ の相関係数が $r=0.8$ である。第1主成分とその寄与率を求めよ。

## **Kai**

### [小問 1]

残差平方和を $\beta_1,\beta_2$ で偏微分して0とおくと、正規方程式

$$
\begin{pmatrix}a&b\\b&c\end{pmatrix}
\binom{\hat\beta_1}{\hat\beta_2}
=\binom de
$$

を得る。$ac-b^2\neq0$ なので逆行列が存在し、

$$
\boxed{
\hat\beta_1=\frac{cd-be}{ac-b^2},qquad
\hat\beta_2=\frac{ae-bd}{ac-b^2}
}.
$$

### [小問 2]

説明変数同士に強い線形関係がある状態を多重共線性という。このときデザイン行列の列がほぼ線形従属となり、$X^{\mathsf T}X$ が特異に近づく。その結果、回帰係数の分散が大きくなり、データの小さな変化で推定値の符号や大きさが激変する。予測精度が直ちに悪化しない場合でも、各変数の効果の解釈は不安定になる。変数の削減、主成分回帰、リッジ回帰などが代表的な対処法である。

### [小問 3]

標準化後の相関行列は

$$
R=\begin{pmatrix}1&0.8\\0.8&1\end{pmatrix}.
$$

固有値は $1.8,0.2$ であり、最大固有値 $1.8$ に対応する単位固有ベクトルは $(1,1)^{\mathsf T}/\sqrt2$ である。したがって第1主成分は

$$
\boxed{z_1=\frac{x_1+x_2}{\sqrt2}}.
$$

総分散は $\operatorname{tr}R=2$ なので寄与率は

$$
\boxed{\frac{1.8}{2}=0.9=90\%}.
$$

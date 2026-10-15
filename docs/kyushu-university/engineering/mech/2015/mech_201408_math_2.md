---
sidebar_label: "2015年度 問2（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Quadratic-Form
---

# 九州大学 工学府 機械系専攻 2015年度 数学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$A$ を $2\times2$ 正則対称行列、$I$ を $2\times2$ 単位行列、$\boldsymbol b$ を2次元ベクトル、$c$ を実数とする。$\boldsymbol e_1=(1,0)^{\mathsf T}$、$\boldsymbol e_2=(0,1)^{\mathsf T}$ と定義する。$\|\boldsymbol x\|=\sqrt{\boldsymbol x^{\mathsf T}\boldsymbol x}$ とする。次の各問いに答えよ。（50点）

1. すべての2次元ベクトル $\boldsymbol x$ について $\boldsymbol x^{\mathsf T}A\boldsymbol x-c\|\boldsymbol x\|^2=\boldsymbol x^{\mathsf T}P\boldsymbol x$ を満たす $2\times2$ 行列 $P$ を、$A,c,I$ を用いて表せ。
2. すべての $\boldsymbol x$ について $\boldsymbol x^{\mathsf T}A\boldsymbol x-2\boldsymbol b^{\mathsf T}\boldsymbol x=(\boldsymbol x-\boldsymbol q)^{\mathsf T}A(\boldsymbol x-\boldsymbol q)-r$ を満たす2次元ベクトル $\boldsymbol q$ と実数 $r$ を、$A,\boldsymbol b$ を用いて表せ。
3. $R$ は $R^{\mathsf T}R=I$ を満たす $2\times2$ 実行列で、$A=R\operatorname{diag}(u,v)R^{\mathsf T}$ とする。このとき、$AR\boldsymbol e_1-R\boldsymbol e_1u$ を求めよ。
4. 行列 $A$ の固有値と固有ベクトルを求めよ。

#### 题目描述

完成对称二次型的矩阵表示与配方，再从正交分解读取特征值和特征向量。

## **Kai**

### (1)

$\|\boldsymbol x\|^2=\boldsymbol x^{\mathsf T}I\boldsymbol x$ より、

$$
\boxed{P=A-cI}
$$

と取れる。厳密には対称性を $P$ に要求していないため一意ではなく、$P=A-cI+K$、$K^{\mathsf T}=-K$ も同じ二次形式を与える。対称な代表が上の答えである。

### (2)

右辺を展開すると $\boldsymbol x^{\mathsf T}A\boldsymbol x-2\boldsymbol q^{\mathsf T}A\boldsymbol x+\boldsymbol q^{\mathsf T}A\boldsymbol q-r$。$A$ の対称性と正則性から

$$
\boxed{\boldsymbol q=A^{-1}\boldsymbol b,\qquad r=\boldsymbol b^{\mathsf T}A^{-1}\boldsymbol b}.
$$

### (3)

$$
AR\boldsymbol e_1=R\operatorname{diag}(u,v)\boldsymbol e_1=uR\boldsymbol e_1,
$$

したがって求める値は $\boxed{\boldsymbol0}$。

### (4)

同様に $AR\boldsymbol e_2=vR\boldsymbol e_2$。$u\ne v$ の場合、

$$
\boxed{\lambda=u:\ c_1R\boldsymbol e_1,\qquad
\lambda=v:\ c_2R\boldsymbol e_2}\quad(c_1,c_2\ne0).
$$

$u=v$ の場合は $A=uI$ なので、すべての非零ベクトルが固有値 $u$ に属する。

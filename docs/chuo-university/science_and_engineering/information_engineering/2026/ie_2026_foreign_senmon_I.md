---
sidebar_label: "2026年度外国人入試 問題I（情報工学）"
tags:
  - Chuo-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Differential-Equations.Systems-of-ODEs
  - Discrete-Mathematics.Combinatorics.Fibonacci-Recurrence
  - Discrete-Mathematics.Mathematical-Logic.Mathematical-Induction
---

# 中央大学 理工学研究科 情報工学専攻 2026年度外国人入試 問題I

## **Author**

祭音Myyura (Based on [中央大学の公式解答例](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf) refined with GPT 6 Astra)

## **Description**

1. 次の問いに答えよ。

   (1) 次の行列 $A$ の固有値と対応する固有ベクトルを求めよ。

   $$
   A=\begin{pmatrix}
   1&0&-2\\
   53&2&-34\\
   6&0&-6
   \end{pmatrix}
   $$

   (2) (1) の行列 $A$ を対角化した $\widehat A$ を，$P^{-1}AP=\widehat A$ として求めたい。$P$ と $\widehat A$ を答えよ。

   (3) 次の実変数実数値関数 $y_1(x),y_2(x),y_3(x)$ に関する連立微分方程式の一般解を求めよ。

   $$
   \begin{aligned}
   y_1'(x)&=y_1(x)-2y_3(x),\\
   y_2'(x)&=53y_1(x)+2y_2(x)-34y_3(x),\\
   y_3'(x)&=6y_1(x)-6y_3(x)
   \end{aligned}
   $$

2. Fibonacci 数列とは，次のようにして，漸化式を用いて定義された数列である。

   $$
   F_1=1,\quad F_2=1,\quad F_k=F_{k-1}+F_{k-2}\quad(k\in\mathbb Z,\ k\ge3)
   $$

   Fibonacci 数列の一般項は次のように表されることが知られている。この式は Binet の公式と呼ばれている。

   $$
   F_k=\frac1{\sqrt5}\left\{\left(\frac{1+\sqrt5}{2}\right)^k-\left(\frac{1-\sqrt5}{2}\right)^k\right\}
   $$

   (1) Binet の公式が $k=1$ のとき成り立つことを示せ。

   (2) Binet の公式が $k=2$ のとき成り立つことを示せ。

   (3) Binet の公式が $k\ge3$ のときにも成り立つことを数学的帰納法を用いて示せ。

#### 题目描述

1. 回答下列问题。

   (1) 求矩阵 $A$ 的特征值及对应的特征向量。

   $$
   A=\begin{pmatrix}
   1&0&-2\\
   53&2&-34\\
   6&0&-6
   \end{pmatrix}
   $$

   (2) 希望通过 $P^{-1}AP=\widehat A$ 将 (1) 中的矩阵 $A$ 对角化。求 $P$ 和 $\widehat A$。

   (3) 求以下关于实变量实值函数 $y_1(x),y_2(x),y_3(x)$ 的联立微分方程的一般解。

   $$
   \begin{aligned}
   y_1'(x)&=y_1(x)-2y_3(x),\\
   y_2'(x)&=53y_1(x)+2y_2(x)-34y_3(x),\\
   y_3'(x)&=6y_1(x)-6y_3(x).
   \end{aligned}
   $$

2. Fibonacci（斐波那契）数列由以下递推关系定义：

   $$
   F_1=1,\quad F_2=1,\quad F_k=F_{k-1}+F_{k-2}\quad(k\in\mathbb Z,\ k\ge3).
   $$

   已知该数列的通项可以表示为下面的 Binet 公式：

   $$
   F_k=\frac1{\sqrt5}\left\{\left(\frac{1+\sqrt5}{2}\right)^k-\left(\frac{1-\sqrt5}{2}\right)^k\right\}.
   $$

   (1) 证明 Binet 公式在 $k=1$ 时成立。

   (2) 证明 Binet 公式在 $k=2$ 时成立。

   (3) 用数学归纳法证明 Binet 公式在 $k\ge3$ 时也成立。

## **Kai**

### 1. (1) 固有値と固有ベクトル

第 2 列で行列式を展開すると，

$$
\begin{aligned}
\det(\lambda I-A)
&=(\lambda-2)\bigl((\lambda-1)(\lambda+6)+12\bigr)\\
&=(\lambda-2)(\lambda+2)(\lambda+3).
\end{aligned}
$$

したがって固有値は $-2,-3,2$ である。各固有方程式を解くと，対応する固有ベクトルとして

$$
v_{-2}=\begin{pmatrix}2\\-1\\3\end{pmatrix},\qquad
v_{-3}=\begin{pmatrix}1\\3\\2\end{pmatrix},\qquad
v_2=\begin{pmatrix}0\\1\\0\end{pmatrix}
$$

を取れる。各固有空間はそれぞれのベクトルが張る 1 次元空間であり，固有ベクトル全体はその非零実数倍である。

### 1. (2) 対角化

上の順に固有ベクトルを列として並べれば，

$$
P=\begin{pmatrix}
2&1&0\\
-1&3&1\\
3&2&0
\end{pmatrix},\qquad
\widehat A=\begin{pmatrix}
-2&0&0\\
0&-3&0\\
0&0&2
\end{pmatrix}.
$$

$\det P=-1\ne0$ であり，$AP=P\widehat A$ から $P^{-1}AP=\widehat A$ が成り立つ。

### 1. (3) 連立微分方程式

$y=(y_1,y_2,y_3)^{\mathsf T}$ とすると $y'=Ay$ である。$y=Pz$ と変数変換すれば，

$$
z'=P^{-1}APz=\widehat A z,
$$

すなわち $z_1'=-2z_1$，$z_2'=-3z_2$，$z_3'=2z_3$ となる。よって一般解は

$$
y(x)=C_1e^{-2x}\begin{pmatrix}2\\-1\\3\end{pmatrix}
+C_2e^{-3x}\begin{pmatrix}1\\3\\2\end{pmatrix}
+C_3e^{2x}\begin{pmatrix}0\\1\\0\end{pmatrix},
\qquad C_1,C_2,C_3\in\mathbb R.
$$

成分表示では，

$$
\boxed{
\begin{aligned}
y_1(x)&=2C_1e^{-2x}+C_2e^{-3x},\\
y_2(x)&=-C_1e^{-2x}+3C_2e^{-3x}+C_3e^{2x},\\
y_3(x)&=3C_1e^{-2x}+2C_2e^{-3x}.
\end{aligned}}
$$

### 2. (1) $k=1$

$\alpha=(1+\sqrt5)/2$，$\beta=(1-\sqrt5)/2$ とおく。$\alpha-\beta=\sqrt5$ より，

$$
\frac{\alpha-\beta}{\sqrt5}=1=F_1.
$$

### 2. (2) $k=2$

$\alpha+\beta=1$ なので，

$$
\frac{\alpha^2-\beta^2}{\sqrt5}
=\frac{(\alpha-\beta)(\alpha+\beta)}{\sqrt5}
=1=F_2.
$$

### 2. (3) 数学的帰納法

$\alpha,\beta$ はともに $t^2-t-1=0$ の解であるから，

$$
\alpha^2=\alpha+1,\qquad \beta^2=\beta+1
$$

が成り立つ。$k\ge3$ とし，$k-1$ と $k-2$ で公式が成り立つと仮定すると，漸化式より

$$
\begin{aligned}
F_k
&=F_{k-1}+F_{k-2}\\
&=\frac{\alpha^{k-1}+\alpha^{k-2}-\beta^{k-1}-\beta^{k-2}}{\sqrt5}\\
&=\frac{\alpha^{k-2}(\alpha+1)-\beta^{k-2}(\beta+1)}{\sqrt5}\\
&=\frac{\alpha^k-\beta^k}{\sqrt5}.
\end{aligned}
$$

(1)，(2) の初期条件と合わせて，数学的帰納法によりすべての整数 $k\ge1$ で公式が成り立つ。

## **Reference**

- [中央大学 2026年度 情報工学専攻 公式問題：外国人留学生入試・問題I（冊内 p.9／PDF 第10頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-01.pdf#page=10)
- [中央大学 公式解答例・出題の意図：外国人留学生入試・問題I（冊内 p.12／PDF 第13頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf#page=13)

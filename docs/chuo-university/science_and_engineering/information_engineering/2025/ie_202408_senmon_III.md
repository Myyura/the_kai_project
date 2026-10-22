---
sidebar_label: "2024年8月実施 問題III（情報工学）"
tags:
  - Chuo-University
  - Mathematics.Linear-Algebra.Householder-Transformation
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 中央大学 理工学研究科 情報工学専攻 2024年8月実施 問題III

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

問題 I は必答。問題 II～V のうち，2 問を選んで解答すること。

つぎの設問に答えよ。

1. $n$ 次正方行列のヘッセンベルグ型行列 $B=(b_{ij})$ とは，$3\le i\le n,\ 1\le j\le i-2$ について，$b_{ij}=0$ である行列である。$n=5$ の例を以下に示す。「$*$」は非零要素を示す。$B$ が対称行列のときは，右のように三重対角行列である：

   $$
   B=\begin{pmatrix}
   *&*&*&*&*\\ *&*&*&*&*\\ 0&*&*&*&*\\ 0&0&*&*&*\\ 0&0&0&*&*
   \end{pmatrix},\qquad
   B=\begin{pmatrix}
   *&*&0&0&0\\ *&*&*&0&0\\ 0&*&*&*&0\\ 0&0&*&*&*\\ 0&0&0&*&*
   \end{pmatrix}.
   $$

   $n$ 次正方行列 $A$ の固有値を数値計算する場合に，$A$ の固有値を直接計算するのではなく，まず，$n$ 次正則正方行列 $S$ により，ヘッセンベルグ型行列 $B=S^{-1}AS$ に変換しておき，$B$ の固有値を計算する手法が知られている。

   この手法において，(i) $A$ の固有値・固有ベクトルと，$B$ の固有値・固有ベクトルとの関係を説明し，(ii) 数値計算手法として，このような変換を行う利点について，説明せよ。

2. $n$ 次元ベクトル $u\ (\ne0)$ に関するハウスホルダ変換の行列 $H(u)$ とは，次式で定義される行列である。

   $$
   H(u)\equiv I-2\frac{uu^{\mathsf T}}{u^{\mathsf T}u}
   $$

   この行列 $H(u)$ について，$H(u)H(u)$ の値を求め，$H(u)$ の逆行列を求めよ。

3. 2 個のハウスホルダ変換を用いて，つぎの実対称行列 $A$ を三重対角行列 $B=S^{-1}AS$ に変換せよ。係数は有理数で計算し，途中経過も明記すること。

   $$
   A=\begin{pmatrix}
   1&1&2&2\\
   1&5&5&-2\\
   2&5&-3&-5\\
   2&-2&-5&2
   \end{pmatrix}
   $$

#### 题目描述

问题 I 必答；问题 II～V 中选答 2 题。回答下列问题。

1. $n$ 阶方阵 $B=(b_{ij})$ 如果满足：对 $3\le i\le n,\ 1\le j\le i-2$，均有 $b_{ij}=0$，则称为 Hessenberg 型矩阵。$n=5$ 的例子如下，其中“$*$”表示非零元素。当 $B$ 为对称矩阵时，它是右侧所示的三对角矩阵：

   $$
   B=\begin{pmatrix}
   *&*&*&*&*\\ *&*&*&*&*\\ 0&*&*&*&*\\ 0&0&*&*&*\\ 0&0&0&*&*
   \end{pmatrix},\qquad
   B=\begin{pmatrix}
   *&*&0&0&0\\ *&*&*&0&0\\ 0&*&*&*&0\\ 0&0&*&*&*\\ 0&0&0&*&*
   \end{pmatrix}.
   $$

   数值计算 $n$ 阶方阵 $A$ 的特征值时，有一种方法不是直接计算 $A$ 的特征值，而是先用 $n$ 阶可逆方阵 $S$ 将其变换成 Hessenberg 型矩阵 $B=S^{-1}AS$，再计算 $B$ 的特征值。

   对该方法，(i) 说明 $A$ 与 $B$ 的特征值、特征向量之间的关系；(ii) 说明在数值计算中进行这种变换的优点。

2. 关于非零 $n$ 维向量 $u$ 的 Householder 变换矩阵定义为

   $$
   H(u)\equiv I-2\frac{uu^{\mathsf T}}{u^{\mathsf T}u}.
   $$

   求 $H(u)H(u)$ 的值及 $H(u)$ 的逆矩阵。

3. 使用两次 Householder 变换，将下面的实对称矩阵 $A$ 变换为三对角矩阵 $B=S^{-1}AS$。各系数用有理数计算，并明确写出中间过程。

   $$
   A=\begin{pmatrix}
   1&1&2&2\\
   1&5&5&-2\\
   2&5&-3&-5\\
   2&-2&-5&2
   \end{pmatrix}.
   $$

## **Kai**

### 1. (i) 固有値・固有ベクトルの関係

相似変換によって特性多項式は変化しない。実際，

$$
\begin{aligned}
\det(\lambda I-B)
&=\det\bigl(S^{-1}(\lambda I-A)S\bigr)\\
&=\det(\lambda I-A).
\end{aligned}
$$

したがって $A,B$ の固有値は代数的重複度も含めて一致する。また，

$$
Av=\lambda v\quad\Longleftrightarrow\quad
B(S^{-1}v)=\lambda(S^{-1}v).
$$

すなわち，$A$ の固有ベクトル $v$ に対応する $B$ の固有ベクトルは $S^{-1}v$ であり，$B$ の固有ベクトル $w$ からは $A$ の固有ベクトル $Sw$ が得られる。

### 1. (ii) 数値計算上の利点

ヘッセンベルグ型の零要素の構造を利用すると，固有値を求める QR 反復の 1 回の計算量を，密行列の $O(n^3)$ から $O(n^2)$ に減らせる。さらに対称行列の場合は三重対角化され，固有値だけを求める三重対角 QR 反復では 1 回の更新を $O(n)$ で行える。対称三重対角行列の格納も $O(n)$ 個の要素で済む。

この前処理は一度だけ行えばよく，反復中も構造を保てるため，反復ごとの計算を軽くできる。また，ハウスホルダ変換などにより $S$ を直交行列に選べば $S^{-1}=S^{\mathsf T}$ であり，2 ノルムを保つので，条件の悪い一般の相似変換による誤差の増幅を避けられる。[QR 法の計算量と直交相似変換](https://people.eecs.berkeley.edu/~demmel/ma221_Fall11/Lectures/Lecture_22.html)

### 2. ハウスホルダ行列の二乗と逆行列

$P=uu^{\mathsf T}/(u^{\mathsf T}u)$ とおくと，

$$
P^2=\frac{u(u^{\mathsf T}u)u^{\mathsf T}}{(u^{\mathsf T}u)^2}=P.
$$

したがって，

$$
H(u)^2=(I-2P)^2=I-4P+4P^2=I.
$$

よって，

$$
\boxed{H(u)H(u)=I,\qquad H(u)^{-1}=H(u)}.
$$

さらに $H(u)^{\mathsf T}=H(u)$ であるので，実ベクトル $u$ に対する $H(u)$ は直交行列でもある。

### 3. 二段階の三重対角化

**第 1 段階。** 第 1 列の下側のベクトル $(1,2,2)^{\mathsf T}$ の長さは $3$ である。これを $(3,0,0)^{\mathsf T}$ に写すため，差 $(1,2,2)^{\mathsf T}-(3,0,0)^{\mathsf T}=(-2,2,2)^{\mathsf T}$ に平行なベクトルを用いる。

$$
u_1=\begin{pmatrix}0\\-1\\1\\1\end{pmatrix},
$$

$$
H_1=H(u_1)=\begin{pmatrix}
1&0&0&0\\
0&\frac13&\frac23&\frac23\\
0&\frac23&\frac13&-\frac23\\
0&\frac23&-\frac23&\frac13
\end{pmatrix}.
$$

左右から $H_1$ を掛けると，

$$
A^{(1)}=H_1AH_1
=\begin{pmatrix}
1&3&0&0\\
3&-3&3&4\\
0&3&9&-1\\
0&4&-1&-2
\end{pmatrix}.
$$

**第 2 段階。** 第 2 列の下側の $(3,4)^{\mathsf T}$ の長さは $5$。これを $(5,0)^{\mathsf T}$ に写すため，$(3,4)^{\mathsf T}-(5,0)^{\mathsf T}=(-2,4)^{\mathsf T}$ を用いる。

$$
u_2=\begin{pmatrix}0\\0\\-1\\2\end{pmatrix},
$$

$$
H_2=H(u_2)=\begin{pmatrix}
1&0&0&0\\
0&1&0&0\\
0&0&\frac35&\frac45\\
0&0&\frac45&-\frac35
\end{pmatrix}.
$$

第 1，2 座標を固定しているため，既に零になった第 1 行・第 1 列の成分を変えない。したがって，

$$
\boxed{B=H_2A^{(1)}H_2
=\begin{pmatrix}
1&3&0&0\\
3&-3&5&0\\
0&5&1&5\\
0&0&5&6
\end{pmatrix}}.
$$

ここで

$$
S=H_1H_2
=\begin{pmatrix}
1&0&0&0\\
0&\frac13&\frac{14}{15}&\frac2{15}\\
0&\frac23&-\frac13&\frac23\\
0&\frac23&-\frac2{15}&-\frac{11}{15}
\end{pmatrix}
$$

とすれば，$S^{-1}=H_2H_1=S^{\mathsf T}$ より $B=S^{-1}AS$ である。すべての行列要素は有理数で求められている。

## **Reference**

- [中央大学 2025年度 夏季一般入学試験・情報工学 公式問題（冊内 p.76／PDF 第77頁）](https://www.chuo-u.ac.jp/uploads/2025/09/admission_gschool_exam_science_10_01.pdf#page=77)

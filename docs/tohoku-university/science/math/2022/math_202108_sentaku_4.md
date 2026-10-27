---
sidebar_label: "2021年8月実施 選択問題 [4]"
tags:
  - Tohoku-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
---

# 東北大学 理学研究科 数学専攻 2021年8月実施 選択問題 \[4\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#7e63b5af-77ee-4ce6-a8c1-b48ef299173e) refined with GPT 6 Astra)

## **Description**

問題は $8$ 題ある。$3$ 題を選択して解答すること。

$3$ 次元ユークリッド空間 $\mathbb R^3$ の標準内積を $\langle\cdot,\cdot\rangle$ とし、写像 $f:\mathbb R^6=\mathbb R^3\times\mathbb R^3\to\mathbb R^3$ を

$$
f(x,y)=(\langle x,x\rangle,\langle y,y\rangle,\langle x,y\rangle)
$$

と定める。また、$\mathbb R^3\times\mathbb R^3$ の部分集合を

$$
U=f^{-1}(\{(1,1,0)\}),\qquad
V=\{(x,y)\in U\mid\langle x,n\rangle=0\}
$$

と定める。ここで $n=(0,0,1)\in\mathbb R^3$ である。以下の問いに答えよ。

(1) 点 $(x,y)=((x_1,x_2,x_3),(y_1,y_2,y_3))\in\mathbb R^3\times\mathbb R^3$ における $f$ のヤコビ行列 $(Jf)_{(x,y)}$ を求めよ。

(2) $U$ は $\mathbb R^6$ の $3$ 次元部分多様体であることを示せ。

(3) $V$ は $2$ 次元トーラス $T=S^1\times S^1$ と同相であることを示せ。ここで $S^1$ は単位円周である。

### 题目描述

本卷共 $8$ 道题，请选择其中 $3$ 道作答。

用 $\langle\cdot,\cdot\rangle$ 表示三维欧氏空间 $\mathbb R^3$ 的标准内积，定义映射 $f:\mathbb R^6=\mathbb R^3\times\mathbb R^3\to\mathbb R^3$ 为

$$
f(x,y)=(\langle x,x\rangle,\langle y,y\rangle,\langle x,y\rangle).
$$

定义 $\mathbb R^3\times\mathbb R^3$ 的子集

$$
U=f^{-1}(\{(1,1,0)\}),\qquad
V=\{(x,y)\in U\mid\langle x,n\rangle=0\},
$$

其中 $n=(0,0,1)\in\mathbb R^3$。回答下列问题。

(1) 求 $f$ 在点 $(x,y)=((x_1,x_2,x_3),(y_1,y_2,y_3))\in\mathbb R^3\times\mathbb R^3$ 处的雅可比矩阵 $(Jf)_{(x,y)}$。

(2) 证明 $U$ 是 $\mathbb R^6$ 的三维子流形。

(3) 证明 $V$ 与二维环面 $T=S^1\times S^1$ 同胚，其中 $S^1$ 为单位圆周。

## **Kai**

### (1)

$$
\boxed{(Jf)_{(x,y)}=
\begin{pmatrix}
2x_1&2x_2&2x_3&0&0&0\\
0&0&0&2y_1&2y_2&2y_3\\
y_1&y_2&y_3&x_1&x_2&x_3
\end{pmatrix}.}
$$

### (2)

$(x,y)\in U$ では $x,y$ は正規直交ベクトルである。ヤコビ行列の行ベクトルの線形関係は

$$
2ax+cy=0,\qquad2by+cx=0
$$

と書ける。第 $1$ 式と $x,y$ との内積から $a=c=0$、第 $2$ 式から $b=0$ が従う。したがってすべての $(x,y)\in U$ で $\operatorname{rank}(Jf)_{(x,y)}=3$ となり、$(1,1,0)$ は $f$ の正則値である。

$U$ は例えば $((1,0,0),(0,1,0))$ を含むから空でない。正則値定理により、$U$ は $6-3=3$ 次元部分多様体である。

### (3)

$u=(u_1,u_2)\in S^1$, $v=(v_1,v_2)\in S^1$ に対し

$$
\Phi(u,v)=\bigl((u_1,u_2,0),(v_1u_2,-v_1u_1,v_2)\bigr)
$$

と定める。右辺の二つのベクトルを $x,y$ とすると、

$$
|x|^2=1,\quad |y|^2=v_1^2(u_1^2+u_2^2)+v_2^2=1,\quad
\langle x,y\rangle=0,\quad\langle x,n\rangle=0
$$

なので、$\Phi:S^1\times S^1\to V$ は連続写像である。

逆に $(x,y)\in V$ ならば $x_3=0$ かつ $x_1^2+x_2^2=1$ であり、$x$ に垂直な平面の正規直交基底は $(x_2,-x_1,0),n$ である。よって

$$
y=(y_1x_2-y_2x_1)(x_2,-x_1,0)+y_3n,
$$

かつ $(y_1x_2-y_2x_1)^2+y_3^2=1$ である。したがって

$$
\Psi(x,y)=\bigl((x_1,x_2),(y_1x_2-y_2x_1,y_3)\bigr)
$$

は $V\to S^1\times S^1$ の連続写像であり、直接代入により $\Psi\circ\Phi=\operatorname{id}$, $\Phi\circ\Psi=\operatorname{id}$ が成り立つ。ゆえに $\Phi$ は同相写像である。

## **Reference**

- [東北大学原問題の公開ミラー（2022年度・選択問題、PDF 3ページ）](https://raw.githubusercontent.com/Zhang-HL-1/japan-study-journal/0a188193807a8b4fa38aa5347ff01691340713da/assets/past-papers/documents/f337b6d1a47d494cd8f448bb4f7c860024fc67959f11c7353e1dbfc786484c24.pdf)
- [L^2：2022年度の対応する解答](https://note.com/normalmath/n/n89152917de11#7e63b5af-77ee-4ce6-a8c1-b48ef299173e)

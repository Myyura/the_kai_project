---
sidebar_label: "2015年8月実施 選択問題 [3]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Simplicial-and-Cellular-Homology
---

# 東北大学 理学研究科 数学専攻 2015年8月実施 選択問題 \[3\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#58a7a480-77ce-41aa-a5c3-31addd1b5df9) refined with GPT 6 Astra)

## **Description**


$\mathbb R^4$ の部分集合

$$
\begin{aligned}
A&:=\{(x,y,z,w)\in\mathbb R^4\mid 1\le x^2+y^2+z^2\le9,\ w=0\},\\
B&:=\{(x,y,z,w)\in\mathbb R^4\mid 1\le x^2+y^2+w^2\le9,\ z=0\}
\end{aligned}
$$

に対して、以下の問いに答えよ。

(1) $n$ 次元球面 $S^n$ の $p$ 次整係数ホモロジー群 $H_p(S^n)$ が $\mathbb Z$ と同型となる $p$ は何か答えよ。ただし、証明はしなくてよい。

(2) $A$ が $2$ 次元球面 $S^2$ とホモトピー同値であることを示せ。

(3) $A\cap B$ の整係数ホモロジー群を求めよ。

(4) $A\cup B$ の整係数ホモロジー群を求めよ。

### 题目描述


对于 $\mathbb R^4$ 的子集

$$
\begin{aligned}
A&:=\{(x,y,z,w)\in\mathbb R^4\mid 1\le x^2+y^2+z^2\le9,\ w=0\},\\
B&:=\{(x,y,z,w)\in\mathbb R^4\mid 1\le x^2+y^2+w^2\le9,\ z=0\},
\end{aligned}
$$

回答下列问题。

(1) 给出使 $n$ 维球面 $S^n$ 的 $p$ 阶整系数同调群 $H_p(S^n)$ 同构于 $\mathbb Z$ 的 $p$。不必证明。

(2) 证明 $A$ 与二维球面 $S^2$ 同伦等价。

(3) 求 $A\cap B$ 的整系数同调群。

(4) 求 $A\cup B$ 的整系数同调群。

## **Kai**

以下、係数はすべて $\mathbb Z$ とする。

### (1)

$n\ge1$ では $p=0,n$ である。なお $n=0$ まで考える場合は $H_0(S^0)\cong\mathbb Z^2$ なので、該当する $p$ はない。

### (2)

$p=(x,y,z,0)\in A$ に対し $r=\sqrt{x^2+y^2+z^2}$ とおく。写像

$$
H(p,t)=\left(1-t+\frac{t}{r}\right)p\qquad(0\le t\le1)
$$

を考えると、その原点からの距離は $(1-t)r+t\in[1,3]$ なので $H(p,t)\in A$ である。また $H(p,0)=p$、$H(p,1)=p/r$ であり、$r=1$ の点は常に固定される。したがって $A$ は単位球面 $S^2\times\{0\}$ に強変形収縮し、$A\simeq S^2$ である。

### (3)

$$
A\cap B=\{(x,y,0,0)\mid1\le x^2+y^2\le9\}
$$

は平面内の閉円環であり、半径方向の変形収縮により $S^1$ とホモトピー同値である。よって

$$
H_q(A\cap B)\cong
\begin{cases}
\mathbb Z & q=0,1,\\
0 & q\ge2.
\end{cases}
$$

### (4)

(2) の半径方向の変形収縮は $A\cup B$ 全体でも定義でき、$A$ と $B$ をそれぞれ単位 $2$ 球面へ、共通部分を共通の赤道へ同時に収縮させる。この二つの球面には共通の赤道を部分複体とする CW 分割を取れるので、Mayer–Vietoris 完全列を適用できる。

$A\simeq S^2$、$B\simeq S^2$、$A\cap B\simeq S^1$ より、高次の部分は

$$
0\longrightarrow\mathbb Z^2\longrightarrow H_2(A\cup B)
\longrightarrow\mathbb Z\longrightarrow0
$$

となる。右端が自由アーベル群なので分裂し、$H_2(A\cup B)\cong\mathbb Z^3$ を得る。低次の部分では

$$
0\longrightarrow H_1(A\cup B)\longrightarrow\mathbb Z
\xrightarrow{\ a\mapsto(a,-a)\ }\mathbb Z^2
\longrightarrow H_0(A\cup B)\longrightarrow0.
$$

中央の写像は単射であり、その余核は $\mathbb Z$ である。以上から

$$
\boxed{
H_q(A\cup B)\cong
\begin{cases}
\mathbb Z & q=0,\\
\mathbb Z^3 & q=2,\\
0 & q=1\text{ または }q\ge3.
\end{cases}}
$$

## **Reference**

- [東北大学の原試験問題（公開保存版：`sentaku2016(H28).pdf`、PDF 3 ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2016年度の対応する解答](https://note.com/normalmath/n/n89152917de11#58a7a480-77ce-41aa-a5c3-31addd1b5df9)

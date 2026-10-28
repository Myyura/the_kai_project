---
sidebar_label: "2020年8月実施 選択問題 [3]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Simplicial-and-Cellular-Homology
---

# 東北大学 理学研究科 数学専攻 2020年8月実施 選択問題 \[3\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#d5da6e47-d44f-490a-9527-02d50479911f) refined with GPT 6 Astra)

## **Description**


ユークリッド空間 $\mathbb R^3$ の次の部分位相空間 $X$ の整係数ホモロジー群 $H_k(X;\mathbb Z)$（$k=0,1,2,\ldots$）をすべて求めよ。

$$
X=\{(x,y,z)\mid y^2+z^2\le2,\ x=-1,0,1\}
\cup\{(x,y,z)\mid y^2+z^2=1,\ -1\le x\le1\}.
$$

### 题目描述


求欧氏空间 $\mathbb R^3$ 的下列子拓扑空间 $X$ 的全部整系数同调群 $H_k(X;\mathbb Z)$（$k=0,1,2,\ldots$）：

$$
X=\{(x,y,z)\mid y^2+z^2\le2,\ x=-1,0,1\}
\cup\{(x,y,z)\mid y^2+z^2=1,\ -1\le x\le1\}.
$$

## **Kai**

$x=-1,0,1$ に置かれた半径 $\sqrt2$ の三枚の円板と、半径 $1$ の円柱面を考える。各円板の半径 $1$ より外の部分を半径方向に収縮し、半径 $1$ 以下の部分と円柱面を固定する。具体的には $\rho=\sqrt{y^2+z^2}>1$ の点を

$$
(x,y,z)\longmapsto
\left(x,\frac{(1-t)\rho+t}{\rho}y,\frac{(1-t)\rho+t}{\rho}z\right)
$$

と動かし、$\rho\le1$ の点は固定すればよい。これにより $X$ は、円柱面と半径 $1$ の三枚の円板からなる空間 $X'$ に強変形収縮する。

$X'$ のうち $-1\le x\le0$ の部分を $P$、$0\le x\le1$ の部分を $Q$ とする。どちらも閉円柱の境界なので $P\cong S^2$、$Q\cong S^2$ であり、共通部分は中央の円板

$$
P\cap Q=\{(0,y,z)\mid y^2+z^2\le1\}\cong D^2
$$

である。中央の円板を部分複体とする CW 分割を取って、被約 Mayer–Vietoris 完全列を適用すると、$P\cap Q$ は可縮なので、すべての正次数について

$$
\widetilde H_k(X';\mathbb Z)
\cong\widetilde H_k(P;\mathbb Z)\oplus\widetilde H_k(Q;\mathbb Z).
$$

さらに $X'$ は連結である。従って $X\simeq X'$ より

$$
\boxed{
H_k(X;\mathbb Z)\cong
\begin{cases}
\mathbb Z & k=0,\\
\mathbb Z^2 & k=2,\\
0 & k=1\text{ または }k\ge3.
\end{cases}}
$$

## **Reference**

- [東北大学の原試験問題（公開保存版：`2021(R3)sentaku.pdf`、PDF 3 ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2021年度の対応する解答](https://note.com/normalmath/n/n89152917de11#d5da6e47-d44f-490a-9527-02d50479911f)

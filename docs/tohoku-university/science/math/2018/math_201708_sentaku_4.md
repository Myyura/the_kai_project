---
sidebar_label: "2017年8月実施 選択問題 [4]"
tags:
  - Tohoku-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
---

# 東北大学 理学研究科 数学専攻 2017年8月実施 選択問題 \[4\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#7d3717ce-45fe-48b2-b3d1-e0f1cbe59d28) refined with GPT 6 Astra)

## **Description**


写像 $f:\mathbb R^3\to\mathbb R^4$ を

$$
f(x,y,z)=\left(x,y^3,z^3,yz-\frac z2\right)
$$

で定める。以下の問いに答えよ。

(1) $f$ のヤコビ行列を求めよ。

(2) 点 $p\in\mathbb R^3$ における $f$ の微分 $df_p:T_p\mathbb R^3\to T_{f(p)}\mathbb R^4$ が単射とならない点 $p$ をすべて求めよ。

(3) 曲面 $S=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2=1,\ x>0\}$ 上の点 $q=(x_0,y_0,z_0)$ における接ベクトル $(u,v,w)$ の $df_q$ による像を求めよ。

(4) 写像 $g:S\to\mathbb R^4$ を $f$ の $S$ への制限で定める。点 $q\in S$ における $g$ の微分 $dg_q:T_qS\to T_{g(q)}\mathbb R^4$ が単射とならない点を求めよ。

### 题目描述


定义映射 $f:\mathbb R^3\to\mathbb R^4$ 为

$$
f(x,y,z)=\left(x,y^3,z^3,yz-\frac z2\right).
$$

回答下列问题。

(1) 求 $f$ 的雅可比矩阵。

(2) 求所有使微分 $df_p:T_p\mathbb R^3\to T_{f(p)}\mathbb R^4$ 不为单射的点 $p\in\mathbb R^3$。

(3) 对曲面 $S=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2=1,\ x>0\}$ 上的点 $q=(x_0,y_0,z_0)$，求切向量 $(u,v,w)$ 在 $df_q$ 下的像。

(4) 令 $g:S\to\mathbb R^4$ 为 $f$ 在 $S$ 上的限制。求所有使微分 $dg_q:T_qS\to T_{g(q)}\mathbb R^4$ 不为单射的点 $q\in S$。

## **Kai**

### (1)

各成分を偏微分すると

$$
Jf(x,y,z)=
\begin{pmatrix}
1&0&0\\
0&3y^2&0\\
0&0&3z^2\\
0&z&y-\frac12
\end{pmatrix}.
$$

### (2)

$df_p$ が単射でないことは $Jf(p)$ の階数が $3$ 未満であることと同値である。$3$ 次小行列式は

$$
9y^2z^2,\qquad3y^2\left(y-\frac12\right),\qquad-3z^3,\qquad0.
$$

これらがすべて $0$ となる必要十分条件は $z=0$ かつ $y=0$ または $y=\frac12$ である。したがって求める集合は

$$
\boxed{\{(x,0,0)\mid x\in\mathbb R\}\cup
\left\{\left(x,\frac12,0\right)\mid x\in\mathbb R\right\}.}
$$

### (3)

$T_qS=\{(u,v,w)\mid x_0u+y_0v+z_0w=0\}$ であり、求める像は

$$
\boxed{df_q(u,v,w)=
\left(u,3y_0^2v,3z_0^2w,z_0v+\left(y_0-\frac12\right)w\right).}
$$

### (4)

$dg_q$ は $df_q$ の $T_qS$ への制限なので、単射でないための条件は $T_qS\cap\ker df_q\ne\{0\}$ である。(2) と $x_0>0$ から候補は

$$
q_1=(1,0,0),\qquad q_2=\left(\frac{\sqrt3}{2},\frac12,0\right)
$$

の二点に限られる。

$q_1$ では $\ker df_{q_1}=\{(0,v,0)\mid v\in\mathbb R\}$ であり、これは $T_{q_1}S=\{u=0\}$ に含まれる。

$q_2$ では $\ker df_{q_2}=\{(0,0,w)\mid w\in\mathbb R\}$ であり、これも

$$
T_{q_2}S=\left\{(u,v,w)\mid\frac{\sqrt3}{2}u+\frac12v=0\right\}
$$

に含まれる。よって求める点はちょうど

$$
\boxed{(1,0,0),\quad\left(\frac{\sqrt3}{2},\frac12,0\right)}
$$

である。

## **Reference**

- [東北大学の原試験問題（公開保存版：`sentaku2018(H30).pdf`、PDF 3 ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2018年度の対応する解答](https://note.com/normalmath/n/n89152917de11#7d3717ce-45fe-48b2-b3d1-e0f1cbe59d28)

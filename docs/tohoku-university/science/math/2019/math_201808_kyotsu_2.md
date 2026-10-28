---
sidebar_label: "2018年8月実施 共通問題 [2]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Metric-Space
  - Mathematics.Topology.Complete-Metric-Space
  - Mathematics.Topology.Open-and-Closed-Sets
---

# 東北大学 理学研究科 数学専攻 2018年8月実施 共通問題 \[2\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#fcf3571f-4eee-4a17-b5ed-3f7aeeb48206) refined with GPT 6 Astra)

## **Description**

$\mathbb R$ は実数全体のなす集合を表す。

$\mathbb R^2=\mathbb R\times\mathbb R$ の点 $x=(x_0,x_1)\in\mathbb R^2$ に対し、$\sqrt{x_0^2+x_1^2}$ を $|x|$ で表す。関数 $d:\mathbb R^2\times\mathbb R^2\to\mathbb R$ を

$$
d(x,y)=\begin{cases}|x|+|y|& (x,y\in\mathbb R^2,\ x\ne y\text{ のとき}),\\0&(x,y\in\mathbb R^2,\ x=y\text{ のとき}),\end{cases}
$$

で定める。以下の問いに答えよ。

(1) $(\mathbb R^2,d)$ は距離空間となることを示せ。

(2) 距離空間 $(\mathbb R^2,d)$ は完備であることを示せ。

(3) 原点 $O=(0,0)\in\mathbb R^2$ を含む部分集合 $A$ を考える。$A$ が $d$ の定める位相について開集合であることと、$B_r\subset A$ となる正の数 $r$ が存在することが同値であることを示せ。ただし $B_r=\{x\in\mathbb R^2\mid |x|<r\}$ とする。

### 题目描述

$\mathbb R$ 表示实数集。

对于 $\mathbb R^2=\mathbb R\times\mathbb R$ 中的点 $x=(x_0,x_1)$，以 $|x|$ 表示 $\sqrt{x_0^2+x_1^2}$。定义函数 $d:\mathbb R^2\times\mathbb R^2\to\mathbb R$ 为

$$
d(x,y)=\begin{cases}|x|+|y|& (x,y\in\mathbb R^2,\ x\ne y),\\0&(x,y\in\mathbb R^2,\ x=y).\end{cases}
$$

回答下列问题。

(1) 证明 $(\mathbb R^2,d)$ 是度量空间。

(2) 证明度量空间 $(\mathbb R^2,d)$ 是完备的。

(3) 设 $A$ 是包含原点 $O=(0,0)$ 的子集。证明：$A$ 关于 $d$ 所确定的拓扑为开集，当且仅当存在正数 $r$ 使 $B_r\subset A$，其中 $B_r=\{x\in\mathbb R^2\mid |x|<r\}$。

## **Kai**

### (1)

非負性と対称性は定義から明らかである。$x\ne y$ なら $x,y$ の少なくとも一方は非零なので $d(x,y)=|x|+|y|>0$ となり、$d(x,y)=0\iff x=y$ も成り立つ。

三角不等式について、$x=z$ なら左辺は $0$、$y=x$ または $y=z$ なら等号が成立する。残りの場合は $x,y,z$ が互いに異なり、

$$
d(x,z)=|x|+|z|\le |x|+2|y|+|z|=d(x,y)+d(y,z).
$$

よって $d$ は距離である。

### (2)

$d$ に関するコーシー列 $(x_n)$ を取る。最終的に定値なら明らかに収束するので、そうでない場合を考える。

任意の $\varepsilon>0$ に対し、$m,n\ge N$ なら $d(x_n,x_m)<\varepsilon$ となる $N$ を取る。各 $n\ge N$ に対し、列が最終的に定値でないことから $m\ge N$ で $x_m\ne x_n$ となるものが存在する。従って

$$
|x_n|\le |x_n|+|x_m|=d(x_n,x_m)<\varepsilon.
$$

$d(x_n,0)=|x_n|$ なので $x_n\to0$ である。いずれの場合も空間内で収束し、$(\mathbb R^2,d)$ は完備である。

### (3)

$A$ が開集合で $0\in A$ なら、ある $r>0$ について $B_d(0,r)\subset A$ である。$d(0,x)=|x|$ より $B_d(0,r)=B_r$ であるから必要条件が得られる。

逆に $B_r\subset A$ とする。原点では $B_d(0,r)\subset A$ である。また $p\in A\setminus\{0\}$ に対し、$x\ne p$ なら $d(p,x)=|p|+|x|\ge |p|$ なので

$$
B_d(p,|p|)=\{p\}\subset A.
$$

従って $A$ の全ての点は $A$ に含まれる開球をもち、$A$ は開集合である。

## **Reference**

- [東北大学原問題の公開保存版（2019年度・共通問題、kyotsu2019(H31).pdf、PDF 2ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2019年度の解答](https://note.com/normalmath/n/n89152917de11#fcf3571f-4eee-4a17-b5ed-3f7aeeb48206)

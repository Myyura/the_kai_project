---
sidebar_label: "2021年8月実施 共通問題 [2]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Open-and-Closed-Sets
  - Mathematics.Topology.Hausdorff-Space
  - Mathematics.Topology.Continuity-and-Homeomorphisms
---

# 東北大学 理学研究科 数学専攻 2021年8月実施 共通問題 \[2\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#0d37fa59-4be2-4652-a539-359dee1f4029) refined with GPT 6 Astra)

## **Description**

問題は $4$ 題ある。全問に解答すること。

$n\in\mathbb Z_{>0}$ と $b\in\mathbb Z$ に対し、

$$
A_{n,b}=\{5^nt+b\mid t\in\mathbb Z\}
$$

とおく。$\mathbb Z$ の部分集合族 $\mathcal B=\{A_{n,b}\mid n\in\mathbb Z_{>0},b\in\mathbb Z\}$ に対し、$\mathcal O$ を $\mathcal B$ を開基とする $\mathbb Z$ の位相（開集合系）と定める。

(1) $A_{1,3}$ が位相空間 $(\mathbb Z,\mathcal O)$ の閉集合であることを示せ。

(2) 位相空間 $(\mathbb Z,\mathcal O)$ がハウスドルフであることを示せ。

(3) $f:(\mathbb Z,\mathcal O)\to(\mathbb Z,\mathcal O)$ を以下で定める。$x\in\mathbb Z$ に対し、$x\in A_{1,0}$ のとき $f(x)=x/5$、それ以外のとき $f(x)=x$。このとき、$f$ が連続であるかどうか、理由とともに答えよ。

### 题目描述

试卷共 $4$ 道题，全部作答。

对正整数 $n\in\mathbb Z_{>0}$ 和整数 $b\in\mathbb Z$，令

$$
A_{n,b}=\{5^nt+b\mid t\in\mathbb Z\}.
$$

令 $\mathcal B=\{A_{n,b}\mid n\in\mathbb Z_{>0},b\in\mathbb Z\}$，并将 $\mathcal O$ 定义为以 $\mathcal B$ 为基的 $\mathbb Z$ 上的拓扑（开集族）。

(1) 证明 $A_{1,3}$ 是 $(\mathbb Z,\mathcal O)$ 的闭集。

(2) 证明 $(\mathbb Z,\mathcal O)$ 是豪斯多夫空间。

(3) 定义映射 $f:(\mathbb Z,\mathcal O)\to(\mathbb Z,\mathcal O)$：当 $x\in A_{1,0}$ 时，$f(x)=x/5$；否则 $f(x)=x$。判断 $f$ 是否连续，并说明理由。

## **Kai**

### (1)

$$
\mathbb Z\setminus A_{1,3}=A_{1,0}\cup A_{1,1}\cup A_{1,2}\cup A_{1,4}
$$

は開基の元の和であるから開集合である。従って $A_{1,3}$ は閉集合である。

### (2)

$x\ne y$ を任意に取り、$5^n>|x-y|$ となる正の整数 $n$ を取る。$A_{n,x}$ と $A_{n,y}$ はそれぞれ $x,y$ を含む開集合である。この二集合が交われば $x\equiv y\pmod{5^n}$ となるが、$0<|x-y|<5^n$ に反する。従って両者は交わらず、空間はハウスドルフである。

### (3)

開基の各元の逆像が開集合であることを示せばよい。定義より

$$
f^{-1}(A_{m,b})=A_{m+1,5b}\cup\bigl(A_{m,b}\setminus A_{1,0}\bigr).
$$

第一項は開基の元である。また (1) と同様に $A_{1,0}$ は閉集合なので、第二項は二つの開集合 $A_{m,b}$ と $\mathbb Z\setminus A_{1,0}$ の共通部分であり開いている。従って $f^{-1}(A_{m,b})$ は開集合となり、$f$ は連続である。

## **Reference**

- [東北大学原問題の公開保存版（2022年度・共通問題、PDF 2ページ）](https://raw.githubusercontent.com/Zhang-HL-1/japan-study-journal/0a188193807a8b4fa38aa5347ff01691340713da/assets/past-papers/documents/6110ccabe6011778aebd2b7b2760cae02ff6a050fb05faeed14330c67bddee6d.pdf#page=2)
- [L^2：2022年度の解答](https://note.com/normalmath/n/n89152917de11#0d37fa59-4be2-4652-a539-359dee1f4029)

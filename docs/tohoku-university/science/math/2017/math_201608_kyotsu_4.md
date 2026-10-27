---
sidebar_label: "2016年8月実施 共通問題 [4]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Continuity-and-Homeomorphisms
---

# 東北大学 理学研究科 数学専攻 2016年8月実施 共通問題 \[4\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#acaee8f3-ce26-4f30-801b-dd883d0ba892) refined with GPT 6 Astra)

## **Description**

問題は $4$ 題ある。全問に解答すること。$\mathbb R$ は実数全体のなす集合を表す。

$2$ 次元ユークリッド空間 $\mathbb R^2$ の部分集合 $\mathbb R_+^2=\{x=(x_1,x_2)\in\mathbb R^2\mid x_1>0,\ x_2>0\}$ の $2$ 点 $x,y$ について、次の (i) (ii) のいずれかが成り立つとき、$x\sim y$ と書くことにする。

(i) $x=y$。

(ii) $x\ne y$、かつ線分 $xy$ の垂直 $2$ 等分線が $\mathbb R^2$ の原点を通る。

以下の問いに答えよ。

(1) 関係 $\sim$ が同値関係であることを示せ。

(2) 同値関係 $\sim$ による商集合 $\mathbb R_+^2/\sim$ から $\mathbb R$ への全単射を一つ与えよ。

(3) $\mathbb R_+^2$ の位相を $\mathbb R^2$ の相対位相で定め、商集合 $\mathbb R_+^2/\sim$ の位相を商位相で定める。$\mathbb R_+^2/\sim$ から $\mathbb R$ への同相写像が存在することを示せ。

### 题目描述

试卷共 $4$ 道题，全部作答。$\mathbb R$ 表示实数集。

设 $\mathbb R_+^2=\{x=(x_1,x_2)\in\mathbb R^2\mid x_1>0,\ x_2>0\}$ 为二维欧几里得空间 $\mathbb R^2$ 的子集。对于其中的两点 $x,y$，当以下 (i)、(ii) 中至少一个成立时，记作 $x\sim y$。

(i) $x=y$。

(ii) $x\ne y$，且线段 $xy$ 的垂直平分线经过 $\mathbb R^2$ 的原点。

回答下列问题。

(1) 证明 $\sim$ 是等价关系。

(2) 给出一个从商集 $\mathbb R_+^2/\sim$ 到 $\mathbb R$ 的双射。

(3) 在 $\mathbb R_+^2$ 上赋予 $\mathbb R^2$ 的子空间拓扑，在商集 $\mathbb R_+^2/\sim$ 上赋予商拓扑。证明存在从 $\mathbb R_+^2/\sim$ 到 $\mathbb R$ 的同胚。

## **Kai**

### (1)

$|x|$ をユークリッドノルムとする。$x\ne y$ のとき、線分 $xy$ の垂直二等分線は $x,y$ から等距離にある点全体なので、原点を通ることは $|x|=|y|$ と同値である。$x=y$ の場合も含め、$x\sim y\iff |x|=|y|$ である。実数の等号の反射律、対称律、推移律から、それぞれ $x\sim x$、$x\sim y\Rightarrow y\sim x$、$x\sim y,\ y\sim z\Rightarrow x\sim z$ が従う。よって $\sim$ は同値関係である。

### (2)

$$
f:\mathbb R_+^2/\sim\ \longrightarrow\mathbb R,\qquad
f([x])=\log|x|
$$

と定める。$|x|$ は同値類に依存して定まり、正なので well-defined である。$f([x])=f([y])$ なら $|x|=|y|$、従って $[x]=[y]$ となり単射である。

任意の $t\in\mathbb R$ に対し

$$
s(t)=\left(\frac{e^t}{\sqrt2},\frac{e^t}{\sqrt2}\right)\in\mathbb R_+^2
$$

とおけば $|s(t)|=e^t$、従って $f([s(t)])=t$ である。よって全射でもある。

### (3)

標準的射影を $\pi$ とする。合成写像

$$
(f\circ\pi)(x_1,x_2)=\frac12\log(x_1^2+x_2^2)
$$

は連続であるから、商位相の定義より $f$ は連続である。一方、(2) の $s:\mathbb R\to\mathbb R_+^2$ は連続であり

$$
f^{-1}=\pi\circ s
$$

となるので逆写像も連続である。従って $f$ は同相写像である。

## **Reference**

- [東北大学原問題の公開保存版（2017年度・共通問題、kyotsu2017(H29).pdf、PDF 3ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2017年度の解答](https://note.com/normalmath/n/n89152917de11#acaee8f3-ce26-4f30-801b-dd883d0ba892)

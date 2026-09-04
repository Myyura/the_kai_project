---
sidebar_label: 2025年8月実施 選択問題 離散数学とオートマトン
tags:
  - University-of-Electro-Communications
  - Discrete-Mathematics.Set-Theory.Binary-Relations
  - Discrete-Mathematics.Set-Theory.Composition-of-Injective-and-Surjective-Maps
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2025年8月実施 選択問題 離散数学とオートマトン

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$$
A=\mathbb Z\times(\mathbb Z\setminus\{0\})
$$

上に

$$
(a,b)\sim(c,d)\iff ad=bc
$$

を定義する。$\sim$ が同値関係であることを示し、$(2,4),(3,6),(-1,-2),(1,2)$ がすべて同値であることを確かめ、一般の $(a,b)$ の同値類を表せ。また、$f(a,b)=a/b$ から誘導される写像 $\bar f:A/{\sim}\to\mathbb Q$ が全単射であることを示せ。

### 题目描述

在整数对集合 $A$ 上以 $ad=bc$ 定义关系。证明其为等价关系，写出等价类，并证明映射 $(a,b)\mapsto a/b$ 在商集上诱导出到 $\mathbb Q$ 的双射。

## **Kai**

### (1)

- 反射律：$ab=ba$ より $(a,b)\sim(a,b)$。
- 対称律：$ad=bc$ ならば $cb=da$ であるから $(c,d)\sim(a,b)$。
- 推移律：$ad=bc, cf=de$ ならば

$$
adf=bcf=bde.
$$

$d\neq0$ より $af=be$、すなわち $(a,b)\sim(e,f)$ である。

よって $\sim$ は同値関係である。

### (2)

4 つの元はすべて $a/b=1/2$ を満たす。したがって、

$$
\boxed{(2,4)\sim(3,6)\sim(-1,-2)\sim(1,2)}.
$$

### (3)

$g=\gcd(|a|,|b|)$、$a_0=a/g$、$b_0=b/g$ とおく。$\gcd(|a_0|,|b_0|)=1$ であるから、

$$
\boxed{
[(a,b)]=\{(ka_0,kb_0)\in A\mid k\in\mathbb Z\setminus\{0\}\}}
$$

である。

### (4)

#### (a)

$(a,b)\sim(c,d)$ ならば $ad=bc$ であるから、

$$
\frac ab=\frac cd.
$$

よって $f(a,b)=a/b$ は $\sim$ に関して well-defined である。

#### (b)

誘導写像は

$$
\bar f:A/{\sim}\longrightarrow\mathbb Q,\qquad
\bar f([(a,b)])=\frac ab
$$

である。

任意の $r\in\mathbb Q$ は $r=a/b$ ($a\in\mathbb Z, b\neq0$) と書けるから、$\bar f$ は全射である。また、

$$
\bar f([(a,b)])=\bar f([(c,d)])
$$

ならば $a/b=c/d$、すなわち $ad=bc$ である。よって $(a,b)\sim(c,d)$ となり、同値類は等しい。したがって $\bar f$ は単射でもある。

以上より、

$$
\boxed{\bar f\text{ は全単射}}
$$

である。

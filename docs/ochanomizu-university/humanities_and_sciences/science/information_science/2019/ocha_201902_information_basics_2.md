---
sidebar_label: "2019年2月実施 情報基礎 問題2"
tags:
  - Ochanomizu-University
  - Discrete-Mathematics.Mathematical-Logic.Predicate-Logic
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2019年2月実施 情報基礎 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

一階述語論理について、以下の問いに答えよ。

### [1]
$x$ は変項、$\varphi$ は一階述語論理の論理式とする。

1. $\forall x\varphi\vDash\exists x\varphi$ をタブロー法によって証明せよ。
2. $\forall x\varphi\vdash_{\mathrm{NK}}\exists x\varphi$ を自然演繹によって証明せよ。

### [2]
一階述語論理の解釈を $I=\langle\langle D_M,F_M\rangle,g\rangle$ とする。ただし、$D_M$ は領域、$F_M$ は名前・述語の対応付け、$g$ は変項の割り当てである。一般に $D_M$ を空でない集合と仮定する理由を考察せよ。

1. $g$ は何から何への写像か。
2. $D_M=\varnothing$ のとき、割り当てが存在するために記号が満たすべき条件を答えよ。
3. $D_M=\varnothing$ のとき、名前の集合から $D_M$ への写像が存在するための条件を答えよ。
4. (2), (3) の条件を満たすとき、項の集合にはどのような項が含まれるか。
5. $D_M\ne\varnothing$ という仮定と [1] の二つの証明との関係を述べよ。

### 题目描述

1. 分别用语义树方法和自然演绎证明：由 $\forall x\varphi$ 可推出 $\exists x\varphi$。
2. 从变量赋值、名称解释及项的构成出发，说明一阶逻辑通常要求论域非空的原因，并联系第 1 问。

## **Kai**

### [1]

#### (1) タブロー法

妥当性を示すため、前提と結論の否定からタブローを始める。$a$ を同じ新しいパラメータとする。

```text
  ∀x φ
  ¬∃x φ
    |
  φ[a/x]       （∀ の展開）
  ¬φ[a/x]      （¬∃ の展開）
    ×
```

枝は矛盾して閉じる。よって

$$
\forall x\varphi\vDash\exists x\varphi.
$$

#### (2) 自然演繹

$a$ を任意のパラメータとすれば、

$$
\begin{array}{lll}
1.&\forall x\varphi&\text{前提}\\
2.&\varphi[a/x]&\forall\text{除去 }(1)\\
3.&\exists x\varphi&\exists\text{導入 }(2)
\end{array}
$$

となる。

### [2]

#### (1)

変項記号の集合を $\mathrm{Var}$ とすると、割り当ては

$$
g:\mathrm{Var}\longrightarrow D_M
$$

という写像である。

#### (2)

$D_M=\varnothing$ への写像が存在するのは、その定義域も空である場合に限る。したがって、**変項記号が一つもないこと**が必要である。

#### (3)

同様に、名前の集合から空集合への写像が存在するためには、**名前（定項記号）が一つもないこと**が必要である。

#### (4)

変項も名前もなければ項を作り始める基礎記号がない。したがって項の集合は空であり、**項は一つも含まれない**。

#### (5)

$D_M=\varnothing$ を許すと、$\forall x\varphi$ は空虚に真である一方、$\exists x\varphi$ は偽となる。したがって

$$
\forall x\varphi\vDash\exists x\varphi
$$

は成立しない。領域が空でないという通常の仮定によって要素を表すパラメータを取ることができ、[1] のタブロー法と自然演繹の推論が意味論的に正当化される。

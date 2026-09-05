---
sidebar_label: 2019年度 離散構造
tags:
  - Osaka-University
  - Discrete-Mathematics.Mathematical-Logic
  - Discrete-Mathematics.Set-Theory
---
# 大阪大学 情報科学研究科 情報工学 2019年度 離散構造

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
### (1) 述語論理

$$
E=(\forall x(p(x)\to q(x))\land\exists x\,p(x))\to\exists x\,q(x)
$$

を考える。公理は $A1:P\to(Q\to P)$、$A2:(P\to(Q\to R))\to((P\to Q)\to(P\to R))$、$A3:(\neg P\to\neg Q)\to((\neg P\to Q)\to P)$、$A4:\forall xP(x)\to P(t)$ である。ここで $P,Q,R$ は任意の論理式、$P(t)$ は $P(x)$ の自由変数 $x$ を代入可能な項 $t$ で置き換えた式とする。推論規則は modus ponens と、$P$ が自由変数 $x$ を含まないとき $P\to Q$ から $P\to\forall xQ$ を導く規則である。

使用可能な定理は $T1:(P\land Q)\vdash P$、$T2:(P\land Q)\vdash Q$、$T3:\vdash(P\to Q)\to(\exists xP\to\exists xQ)$、および演繹定理 $D1$「$P$ が閉論理式で、$\Gamma,P\vdash Q$ ならば $\Gamma\vdash(P\to Q)$」である。$\Gamma\vdash R$ は論理式集合 $\Gamma$ から $R$ が証明可能であることを表す。

- (1-1-1) $T4:\forall xP(x)\vdash P(x)$ を証明せよ。
- (1-1-2) 上記により $E$ を証明せよ。
- (1-2-1) $\neg E$ を、母式が連言標準形である冠頭標準形にせよ。
- (1-2-2),(1-2-3) そのスコーレム連言標準形を求め、導出原理で充足不能を示せ。

### (2) 二項関係と順序

$V=\{1,2,3,4\}$ 上で、$R_1=\{(1,1),(2,2),(3,3),(1,3),(3,1)\}$ とする。$R_2$ は全ての $(i,i)$ に $(1,2),(1,4),(2,3),(2,4),(3,1),(4,3)$ を加えた関係、$R_3$ は全ての $(i,i)$ に $(2,1),(1,3),(2,3),(2,4),(4,3)$ を加えた関係である。

- (2-1-1) 各関係の反射性、対称性、反対称性、推移性を判定せよ。
- (2-1-2) 順序関係となるものを挙げよ。
(2-2) 順序集合 $(V,\preceq)$ と $A\subseteq V$ について、

$$
\operatorname{upper}(A)=\{t\in V\mid\forall s\in A,\ s\preceq t\},\qquad
\operatorname{lower}(A)=\{s\in V\mid\forall t\in A,\ s\preceq t\}
$$

と定義する。$\operatorname{upper}(A)$ に属する $A$ の要素を最大元、$\operatorname{lower}(A)$ に属する $A$ の要素を最小元という。

- (2-2-1) 有限集合 $X$ のべき集合 $\mathcal P(X)$ は包含関係で順序集合となることを示せ。
- (2-2-2) $s,t\subseteq X$ の上界のうち要素数最小のものと、下界のうち要素数最大のものを求めよ。
- (2-2-3) $u\cup c(u)$ が $\mathcal P(X)$ の最大元、$u\cap c(u)$ が最小元となる写像 $c$ に対して、$c(s\cup t)=c(s)\cap c(t)$ を示せ。

## **Kai**
### (1)

(1-1-1) 公理A4で $t=x$ とすれば $\forall xP(x)\to P(x)$。仮定 $\forall xP(x)$ と modus ponens により $P(x)$ を得る。

(1-1-2) 現在の題干に記載されたT3

$$
(P(x)\to Q(x))\to(\exists xP(x)\to\exists xQ(x))
$$

は、自由変数 $x$ を含む任意の $P,Q$ に対しては妥当でない。例えば領域 $\{0,1\}$ で $P(0)$ のみ真、$Q$ は常に偽、自由変数を $x=1$ とすれば反例になる。

ここでは正しい形の量化則

$$
\forall x(P(x)\to Q(x))\to(\exists xP(x)\to\exists xQ(x))
$$

を用いて $E$ の証明を示す。$C=\forall x(p(x)\to q(x))\land\exists x\,p(x)$ を仮定する。T1から $\forall x(p(x)\to q(x))$、上の量化則と modus ponens から $\exists x\,p(x)\to\exists x\,q(x)$ を得る。一方T2から $\exists x\,p(x)$ なので、再び modus ponens により $\exists x\,q(x)$。$C$ は閉論理式だから演繹定理により $\vdash E$。

意味論的にも、$p$ を満たす元を一つ取れば全称前提によりその元は $q$ を満たす。したがって結論自体は妥当である。

(1-2-1) 束縛変数を区別すると

$$
\neg E\equiv\exists y\forall x\forall z\bigl((\neg p(x)\lor q(x))\land p(y)\land\neg q(z)\bigr).
$$

(1-2-2) 新しい定数 $c$ を導入し

$$
\boxed{\forall x\forall z\bigl((\neg p(x)\lor q(x))\land p(c)\land\neg q(z)\bigr)}.
$$

(1-2-3) 節 $\neg p(x)\lor q(x)$ と $p(c)$ から $q(c)$。これと $\neg q(z)$ から空節を導く。したがって $\neg E$ は充足不能。

### (2)

(2-1)

|関係|反射的|対称的|反対称的|推移的|順序関係|
|---|---|---|---|---|---|
|$R_1$|×|○|×|○|×|
|$R_2$|○|×|○|×|×|
|$R_3$|○|×|○|○|○|

$R_1$ は $(4,4)$ を欠く。$R_2$ は $1R_22,2R_23$ だが $1R_23$ ではない。

(2-2-1) 任意の集合について $s\subseteq s$、$s\subseteq t,t\subseteq s\Rightarrow s=t$、$s\subseteq t,t\subseteq u\Rightarrow s\subseteq u$。よって包含関係は順序関係である。

(2-2-2) $\boxed{w=s\cup t,\quad z=s\cap t}$。全ての上界は $s\cup t$ を含み、全ての下界は $s\cap t$ に含まれる。

(2-2-3) 最大元は $X$、最小元は $\varnothing$ なので $c(u)=X\setminus u$。任意の $x\in X$ について

$$
x\in c(s\cup t)\iff x\notin s\land x\notin t\iff x\in c(s)\cap c(t),
$$

よって結論を得る。

---
sidebar_label: '2025年8月実施 化学 第1問'
tags:
  - Tokyo-University
  - Chemistry.Physical-Chemistry.Particle-in-a-Box-and-HOMO-LUMO-Transition
  - Chemistry.Physical-Chemistry.Langmuir-Hinshelwood-CO-Oxidation
  - Chemistry.Physical-Chemistry.Enzyme-Inhibition-and-Lineweaver-Burk-Plot
---

# 東京大学 工学系研究科 2025年8月実施 化学 第1問

## **Author**

GPT-5.6 Sol

## **Description**

物理化学に関する次の I から III に答えよ。

### I

$0\leq x\leq l$ の一次元無限深井戸内を運動する電子を考える。井戸内のポテンシャルエネルギーは 0、井戸外では無限大であり、

$$
-\frac{h^2}{8\pi^2m}
\frac{d^2\psi(x)}{dx^2}
=
E\psi(x)
$$

を満たす。一般解を

$$
\psi(x)=A\cos(\alpha x)+B\sin(\alpha x),
\qquad
\alpha^2=\frac{8\pi^2mE}{h^2}
$$

とし、境界条件を $\psi(0)=\psi(l)=0$ とする。

1. エネルギー固有値が

$$
E_n=\frac{n^2h^2}{8ml^2}
\qquad
(n=1,2,3,\ldots)
$$

となることを示せ。
2. 規格化条件から $A$、$B$ を決定せよ。
3. 図示された 11 個の共役二重結合をもつ分子について、22 個の $\pi$ 電子が共役結合の全長 $L$ の一次元井戸内を運動すると近似する。HOMO-LUMO 遷移の吸収波長 $\lambda$ を $L,m,h,c$ で表せ。

### II

均一な固体触媒表面で、次の素反応による CO 酸化を考える。$\sigma$ は空きサイト、吸着種間の相互作用はないものとする。

$$
\begin{aligned}
\mathrm{CO}+\sigma
&\rightleftharpoons
\mathrm{CO}\mathord{\cdot}\sigma,
\\
\mathrm{O_2}+2\sigma
&\rightleftharpoons
2\mathrm{O}\mathord{\cdot}\sigma,
\\
\mathrm{CO}\mathord{\cdot}\sigma
+\mathrm{O}\mathord{\cdot}\sigma
&\longrightarrow
\mathrm{CO_2}\mathord{\cdot}\sigma+\sigma,
\\
\mathrm{CO_2}\mathord{\cdot}\sigma
&\rightleftharpoons
\mathrm{CO_2}+\sigma.
\end{aligned}
$$

第 1、第 2、第 4 式の平衡定数をそれぞれ $K_{\mathrm{CO}}$、$K_{\mathrm{O_2}}$、$K_{\mathrm{CO_2}}$ とし、各気体の分圧を $P_{\mathrm{CO}}$、$P_{\mathrm{O_2}}$、$P_{\mathrm{CO_2}}$ とする。

1. 等温・等圧条件で CO の吸着が発熱反応になることを Gibbs 自由エネルギーから説明せよ。
2. CO のみが吸着するとき、

$$
\theta'_{\mathrm{CO}}
=
\frac{K_{\mathrm{CO}}P_{\mathrm{CO}}}
{1+K_{\mathrm{CO}}P_{\mathrm{CO}}}
$$

となることを示せ。
3. CO、O、CO2 が競争的に吸着し、表面反応が律速で

$$
r=k\theta_{\mathrm{CO}}\theta_{\mathrm{O}}
$$

と表されるとき、$r$ を平衡定数、分圧および $k$ で表せ。

### III

次の酵素反応を考える。

$$
\mathrm{E+S}
\rightleftharpoons
\mathrm{ES},
\qquad
\mathrm{ES}
\longrightarrow
\mathrm{E+P}.
$$

1. ES の解離定数を $K_{\mathrm{S}}$、最大反応速度を $V_{\max}$、基質濃度を $[\mathrm{S}]$ とし、結合反応を平衡とみなす。反応速度 $v$ を求めよ。
2. 阻害剤 I が次のいずれか一方の反応を起こす場合について、速度式と Lineweaver-Burk プロットの概形を示せ。

$$
\mathrm{E+I}
\rightleftharpoons
\mathrm{EI},
\qquad
\mathrm{ES+I}
\rightleftharpoons
\mathrm{ESI}.
$$

## **Kai**

### I

#### I.1

$\psi(0)=0$ より $A=0$ である。非自明解では $B\neq 0$ なので、$\psi(l)=0$ から

$$
\sin(\alpha l)=0,
\qquad
\alpha l=n\pi
$$

を得る。したがって、

$$
\alpha=\frac{n\pi}{l}.
$$

これを $\alpha^2=8\pi^2mE/h^2$ に代入すると、

$$
\boxed{
E_n=\frac{n^2h^2}{8ml^2}
}
\qquad
(n=1,2,3,\ldots).
$$

#### I.2

全体の位相は任意なので $B>0$ を選ぶ。規格化条件より、

$$
1
=
\int_0^l|\psi_n(x)|^2\,dx
=
B^2\int_0^l
\sin^2\left(\frac{n\pi x}{l}\right)dx
=
B^2\frac{l}{2}.
$$

よって、

$$
\boxed{
A=0,
\qquad
B=\sqrt{\frac{2}{l}}
}
$$

であり、

$$
\boxed{
\psi_n(x)
=
\sqrt{\frac{2}{l}}
\sin\left(\frac{n\pi x}{l}\right)
}.
$$

$B$ の符号を反転しても同じ物理状態を表す。

#### I.3

各準位にはスピンの異なる電子が 2 個ずつ入る。22 個の $\pi$ 電子では

$$
n_{\mathrm{HOMO}}=11,
\qquad
n_{\mathrm{LUMO}}=12.
$$

したがって、遷移エネルギーは

$$
\begin{aligned}
\Delta E
&=
E_{12}-E_{11}
\\
&=
\frac{(12^2-11^2)h^2}{8mL^2}
\\
&=
\frac{23h^2}{8mL^2}.
\end{aligned}
$$

光子エネルギー $hc/\lambda$ と等しいので、

$$
\boxed{
\lambda
=
\frac{8mcL^2}{23h}
}.
$$

### II

#### II.1

等温・等圧過程では

$$
\Delta G=\Delta H-T\Delta S.
$$

気相の CO が表面に局在すると並進自由度が失われるため、吸着のエントロピー変化は $\Delta S<0$ である。吸着が自発的に進む範囲では $\Delta G<0$ だから、

$$
\Delta H
=
\Delta G+T\Delta S
<0.
$$

平衡点でも $\Delta G=0$ より $\Delta H=T\Delta S<0$ である。したがって吸着は発熱反応である。

#### II.2

空きサイトの被覆率を $\theta_*$ とする。CO 吸着平衡から

$$
K_{\mathrm{CO}}
=
\frac{\theta'_{\mathrm{CO}}}
{P_{\mathrm{CO}}\theta_*}.
$$

CO だけが吸着する場合のサイト収支は

$$
\theta_*+\theta'_{\mathrm{CO}}=1
$$

である。したがって、

$$
\theta'_{\mathrm{CO}}
=
K_{\mathrm{CO}}P_{\mathrm{CO}}
\left(1-\theta'_{\mathrm{CO}}\right),
$$

これを解けば

$$
\boxed{
\theta'_{\mathrm{CO}}
=
\frac{K_{\mathrm{CO}}P_{\mathrm{CO}}}
{1+K_{\mathrm{CO}}P_{\mathrm{CO}}}
}.
$$

#### II.3

各平衡式から、

$$
\theta_{\mathrm{CO}}
=
K_{\mathrm{CO}}P_{\mathrm{CO}}\theta_*,
$$

$$
\theta_{\mathrm{O}}
=
\sqrt{K_{\mathrm{O_2}}P_{\mathrm{O_2}}}\,\theta_*.
$$

CO2 の平衡定数は脱離反応を記述するため、

$$
K_{\mathrm{CO_2}}
=
\frac{P_{\mathrm{CO_2}}\theta_*}
{\theta_{\mathrm{CO_2}}},
\qquad
\theta_{\mathrm{CO_2}}
=
\frac{P_{\mathrm{CO_2}}}
{K_{\mathrm{CO_2}}}\theta_*.
$$

サイト収支

$$
\theta_*
+\theta_{\mathrm{CO}}
+\theta_{\mathrm{O}}
+\theta_{\mathrm{CO_2}}
=1
$$

より、

$$
\theta_*
=
\frac{1}{
1
+K_{\mathrm{CO}}P_{\mathrm{CO}}
+\sqrt{K_{\mathrm{O_2}}P_{\mathrm{O_2}}}
+P_{\mathrm{CO_2}}/K_{\mathrm{CO_2}}
}.
$$

よって、

$$
\boxed{
r
=
\frac{
kK_{\mathrm{CO}}P_{\mathrm{CO}}
\sqrt{K_{\mathrm{O_2}}P_{\mathrm{O_2}}}
}{
\left(
1
+K_{\mathrm{CO}}P_{\mathrm{CO}}
+\sqrt{K_{\mathrm{O_2}}P_{\mathrm{O_2}}}
+P_{\mathrm{CO_2}}/K_{\mathrm{CO_2}}
\right)^2
}
}.
$$

### III

#### III.1

全酵素濃度を $[\mathrm{E}]_0$ とすると、

$$
K_{\mathrm{S}}
=
\frac{[\mathrm{E}][\mathrm{S}]}{[\mathrm{ES}]},
\qquad
[\mathrm{E}]_0=[\mathrm{E}]+[\mathrm{ES}].
$$

したがって、

$$
[\mathrm{ES}]
=
\frac{[\mathrm{E}]_0[\mathrm{S}]}
{K_{\mathrm{S}}+[\mathrm{S}]}.
$$

生成反応の速度定数を $k_2$ とし、$V_{\max}=k_2[\mathrm{E}]_0$ とおけば、

$$
\boxed{
v
=
\frac{V_{\max}[\mathrm{S}]}
{K_{\mathrm{S}}+[\mathrm{S}]}
}.
$$

#### III.2 式 (12) の阻害

$$
K_{\mathrm{I}}
=
\frac{[\mathrm{E}][\mathrm{I}]}{[\mathrm{EI}]},
\qquad
\alpha
=
1+\frac{[\mathrm{I}]}{K_{\mathrm{I}}}
$$

とおく。阻害剤は遊離酵素だけに結合するので、競争阻害となり、

$$
\boxed{
v
=
\frac{V_{\max}[\mathrm{S}]}
{\alpha K_{\mathrm{S}}+[\mathrm{S}]}
}.
$$

逆数を取ると、

$$
\boxed{
\frac{1}{v}
=
\frac{\alpha K_{\mathrm{S}}}{V_{\max}}
\frac{1}{[\mathrm{S}]}
+
\frac{1}{V_{\max}}
}.
$$

阻害の有無で $y$ 切片 $1/V_{\max}$ は同じであり、阻害時には傾きが増す。

<pre>
1/v
 ^
 |               /  式 (12) あり
 |              /
 |             /
 |            /  阻害なし
 |           /
 |          *
 |          |
 +----------+------------------> 1/[S]
            0
</pre>

#### III.2 式 (13) の阻害

$$
K_{\mathrm{I}}'
=
\frac{[\mathrm{ES}][\mathrm{I}]}{[\mathrm{ESI}]},
\qquad
\alpha'
=
1+\frac{[\mathrm{I}]}{K_{\mathrm{I}}'}
$$

とおく。阻害剤は ES だけに結合するので、不競争阻害となり、

$$
\boxed{
v
=
\frac{V_{\max}[\mathrm{S}]}
{K_{\mathrm{S}}+\alpha'[\mathrm{S}]}
}.
$$

したがって、

$$
\boxed{
\frac{1}{v}
=
\frac{K_{\mathrm{S}}}{V_{\max}}
\frac{1}{[\mathrm{S}]}
+
\frac{\alpha'}{V_{\max}}
}.
$$

傾きは阻害なしの場合と同じで、$y$ 切片だけが $\alpha'/V_{\max}$ に増加するため、2 本の直線は平行になる。

<pre>
1/v
 ^
 |              /  式 (13) あり
 |             /
 |            /
 |         /     阻害なし
 |        /
 |       /
 +--------------------------------> 1/[S]
</pre>

## **Reference**

- [東京大学大学院工学系研究科 2026年度大学院入学試験問題 化学](https://www.t.u-tokyo.ac.jp/hubfs/admission/2026/C_J_E_2026.pdf)
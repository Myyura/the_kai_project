---
sidebar_label: "2022年度 専門科目（2）II"
tags:
  - Chiba-University
  - Physics.Thermodynamics.Canonical-Partition-Function
  - Physics.Thermodynamics.Heat-Capacity-and-Degrees-of-Freedom
---

# 千葉大学 融合理工学府 先進理化学専攻 物理学コース 2022年度 専門科目（2）II

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%8D%83%E8%91%89%E5%A4%A7%E5%AD%A6/%E8%9E%8D%E5%90%88%E7%90%86%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E5%85%88%E9%80%B2%E7%90%86%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB_%E7%89%A9%E7%90%86%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2022%E5%B9%B4%E5%BA%A6_2_2.html) refined with GPT 6 Astra)

## **Description**

体積 $V$ の容器中の質量 $m$ の分子 $N$ 個からなる気体が、温度 $T$ の平衡状態にある。分子は内部自由度を持つが、並進運動は古典的自由粒子とみなす。$h$ は Planck 定数、$k$ は Boltzmann 定数であり、次の公式を用いてよい。

$$
\int_{-\infty}^{\infty}e^{-x^2/(2\alpha)}\,dx=\sqrt{2\pi\alpha},\qquad
\log N!\simeq N\log N-N\quad(N\gg1).
$$

1. 並進運動の分配関数

   $$
   Z(T,V,N)=\frac1{N!}\left[\frac V{h^3}\iiint e^{-\boldsymbol p^2/(2mkT)}\,d\boldsymbol p\right]^N
   $$

   を $T,V,N$ の関数として求めよ。
2. $Z$ から Helmholtz 自由エネルギー $F$ を求め、$N$ が十分大きいときに示量的であると分かる形に整理せよ。
3. $F$ から圧力 $P$ と定積熱容量 $C_V$ を求めよ。
4. 内部状態が、エネルギー $0$・縮退度 $1$ の基底状態と、エネルギー $\varepsilon>0$・縮退度 $3$ の励起状態からなる分子を考える。(1) 内部自由度による気体の内部エネルギー $U_{\rm int}$ を求めよ。(2) 気体の定積熱容量を求め、$T$ に対する概形を図示せよ。
5. 問4とは異なり、内部準位 $E_j=Bj(j+1)$ が $2j+1$ 重に縮退する分子を考える。$B>0$ はエネルギーの次元を持ち、$j=0,1,2,\ldots$ とする。(1) 内部自由度に関する気体の分配関数 $Z_{\rm int}$ を $j$ の和を用いて表せ。(2) 高温 $T\gg B/k$ では和を積分に置き換えて $Z_{\rm int}$ を求めよ。(3) 高温での定積熱容量を求めよ。
6. 問4または問5の内部自由度を持つ分子の例を挙げ、どちらに対応するかを述べよ。

問4・問5の熱容量には、並進運動による寄与も含めること。

#### 题目描述

体积 $V$ 中有 $N$ 个质量为 $m$ 的分子，在温度 $T$ 下达到平衡。分子有内部自由度，平动视为经典自由运动；$h,k$ 分别为 Planck 常数和 Boltzmann 常数，可使用题面所给 Gaussian 积分和 Stirling 公式。

1. 计算题面给定的平动配分函数。
2. 求 Helmholtz 自由能，并在 $N\gg1$ 时写成显然具有广延性的形式。
3. 由自由能求压强和定容热容。
4. 内部基态能量为 $0$、简并度为 $1$，激发态能量为 $\varepsilon$、简并度为 $3$。求内部自由度的内能，以及包含平动贡献的总热容，并画出热容随温度变化的概形。
5. 换用能级 $E_j=Bj(j+1)$、简并度 $2j+1$ 的分子，其中 $B>0$、$j$ 为非负整数。求内部配分函数的求和式，用积分近似求高温 $T\gg B/k$ 下的表达式，并求总定容热容。
6. 举出符合第4或第5问模型的分子，并说明对应哪一问。

## **Kai**

### 1

三方向の Gaussian 積分を行う。熱的 de Broglie 波長 $\Lambda=h/\sqrt{2\pi mkT}$ を用いると、

$$
\boxed{Z=\frac1{N!}\left[V\left(\frac{2\pi mkT}{h^2}\right)^{3/2}\right]^N
=\frac1{N!}\left(\frac V{\Lambda^3}\right)^N}.
$$

### 2

$$
F=-kT\log Z=kT\log N!-NkT\log\frac V{\Lambda^3}
\simeq\boxed{-NkT\left[\log\frac V{N\Lambda^3}+1\right]}.
$$

固定した $T$ に対し $V,N$ を同じ倍率にすると $F$ もその倍率になるので、熱力学極限で示量的である。

### 3

$$
\boxed{P=-\left(\frac{\partial F}{\partial V}\right)_{T,N}=\frac{NkT}{V}},\qquad
U=F-T\left(\frac{\partial F}{\partial T}\right)_{V,N}=\frac32NkT,
$$

$$
\boxed{C_V=\left(\frac{\partial U}{\partial T}\right)_{V,N}=\frac32Nk}.
$$

### 4

#### (1)

一分子の内部配分関数は $z_{\rm int}=1+3e^{-\beta\varepsilon}$（$\beta=1/(kT)$）。よって、

$$
\boxed{U_{\rm int}=-N\frac{\partial\log z_{\rm int}}{\partial\beta}
=\frac{3N\varepsilon}{e^{\varepsilon/(kT)}+3}}.
$$

#### (2)

$$
\boxed{C_V=Nk\left[\frac32+
\frac{3(\varepsilon/(kT))^2e^{\varepsilon/(kT)}}{(e^{\varepsilon/(kT)}+3)^2}\right]}.
$$

低温・高温のどちらでも $C_V\to3Nk/2$ となり、中間温度で Schottky 型の極大を持つ。

![内部二準位と並進運動による定積熱容量](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/chiba-university/science_engineering/physics/2022/chiba_phys_2022_II_heat_capacity.png)

### 5

#### (1)

一分子の内部配分関数と気体全体の内部配分関数を区別すると、

$$
\boxed{z_{\rm int}=\sum_{j=0}^{\infty}(2j+1)e^{-\beta Bj(j+1)},\qquad Z_{\rm int}=z_{\rm int}^{\,N}}.
$$

並進部分の $Z$ に既に $1/N!$ が含まれるので、内部部分にもう一度付けない。

#### (2)

$$
z_{\rm int}\simeq\int_0^{\infty}(2j+1)e^{-\beta Bj(j+1)}\,dj
=\int_0^{\infty}e^{-\beta Bu}\,du=\frac{kT}{B},
$$

ここで $u=j(j+1)$ とした。したがって $\boxed{Z_{\rm int}\simeq(kT/B)^N}$。

#### (3)

$U_{\rm int}=-\partial_\beta\log Z_{\rm int}\simeq NkT$ より、

$$
\boxed{C_V\simeq\frac32Nk+Nk=\frac52Nk}.
$$

### 6

問5の例は、振動励起を無視できる温度域の異核二原子分子 CO の回転自由度である。剛体回転子の準位は $E_j=\hbar^2j(j+1)/(2I)$、縮退度は $2j+1$ であり、$B=\hbar^2/(2I)$ と対応する。

## **Reference**

- [大学公式問題（PDF 4ページ、冊子3ページ）](https://physics.s.chiba-u.ac.jp/exam/past/files/R4MCphys2.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%8D%83%E8%91%89%E5%A4%A7%E5%AD%A6/%E8%9E%8D%E5%90%88%E7%90%86%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E5%85%88%E9%80%B2%E7%90%86%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB_%E7%89%A9%E7%90%86%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2022%E5%B9%B4%E5%BA%A6_2_2.html)

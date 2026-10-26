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

体積 $V$ の容器に閉じ込められた質量 $m$ の分子 $N$ 個からなる気体が、温度 $T$ の平衡状態にある。気体分子は内部自由度をもつが、並進運動に関しては古典的な自由粒子とみなせるとして、以下の問いに答えなさい。次の公式は証明せずに用いてよい。

$$
\int_{-\infty}^{+\infty}\exp\left(-\frac{x^2}{2\alpha}\right)dx=\sqrt{2\pi\alpha}
$$

$$
\log N!\approx N\log N-N\qquad(N\gg1)
$$

**1.** この気体の並進運動に関する分配関数

$$
Z(T,V,N)=\frac1{N!}\left[\frac V{h^3}\iiint\exp\left(-\frac{\boldsymbol p^2}{2mkT}\right)d\boldsymbol p\right]^N
$$

を $T,V,N$ の関数として求めなさい。ここで $\boldsymbol p$ は気体分子の運動量、$h$ はプランク定数、$k$ はボルツマン定数である。

**2.** 前問で求めた分配関数から Helmholtz 自由エネルギー $F$ を $T,V,N$ の関数として求め、$N$ が十分に大きい場合に示量的であることが分かる形に整理しなさい。

**3.** 前問で求めた Helmholtz 自由エネルギー $F$ から圧力 $P$ と定積熱容量 $C_V$ を求めなさい。

ここまでは気体分子の並進運動だけを考えてきたが、以下では分子の内部自由度も考える。熱容量を答える際には問3で求めた並進運動による熱容量も合わせて答えなさい。問4と問5では異なる種類の分子を扱うので注意しなさい。

**4.** エネルギー $E=0$ で縮退度 $1$ の基底状態と、エネルギー $E=\varepsilon$ で縮退度 $3$ の励起状態を持つ分子を考える。

(1) この内部自由度による気体の内部エネルギー $U_{\mathrm{int}}$ を $N,T$ の関数として求めなさい。

(2) この気体の定積熱容量を求め、温度 $T$ の関数としてその概形をグラフに表しなさい。

**5.** エネルギー準位 $E_j=Bj(j+1)$ が $(2j+1)$ 重に縮退している分子を考える。ただし $B$ はエネルギーの単位を持つ正の定数で、$j$ は $0$ 以上の全ての整数である。

(1) この内部自由度に関する気体の分配関数 $Z_{\mathrm{int}}$ を $j$ についての和 $\displaystyle\sum_{j=0}^{\infty}$ を用いて表しなさい。

(2) 高温（$T\gg B/k$）の場合、前問で求めた $Z_{\mathrm{int}}$ を和を積分におきかえて温度 $T$ の関数として表しなさい。

(3) この気体の高温での定積熱容量を求めなさい。

**6.** 問4あるいは問5のようなモデルで記述できる内部自由度を持つ分子の例をあげなさい。答える際にはどちらの場合であるかを述べること。

### 题目描述

体积为 $V$ 的容器内有由 $N$ 个质量为 $m$ 的分子组成的气体，处于温度 $T$ 的平衡态。气体分子具有内部自由度，但其平动可视为经典自由粒子运动。回答以下问题。下列公式可以不经证明直接使用。

$$
\int_{-\infty}^{+\infty}\exp\left(-\frac{x^2}{2\alpha}\right)dx=\sqrt{2\pi\alpha}
$$

$$
\log N!\approx N\log N-N\qquad(N\gg1)
$$

**1.** 将该气体平动的配分函数

$$
Z(T,V,N)=\frac1{N!}\left[\frac V{h^3}\iiint\exp\left(-\frac{\boldsymbol p^2}{2mkT}\right)d\boldsymbol p\right]^N
$$

求为 $T,V,N$ 的函数。其中 $\boldsymbol p$ 为气体分子的动量，$h$ 为普朗克常数，$k$ 为玻尔兹曼常数。

**2.** 由上一问的配分函数，求 Helmholtz 自由能 $F$ 作为 $T,V,N$ 的函数，并整理为当 $N$ 足够大时能看出其广延性的形式。

**3.** 由上一问的 Helmholtz 自由能 $F$ 求压强 $P$ 和定容热容 $C_V$。

此前只考虑气体分子的平动，以下还要考虑分子的内部自由度。回答热容时，须包含问3中求得的平动热容。注意问4和问5研究的是不同种类的分子。

**4.** 考虑具有能量 $E=0$、简并度为 $1$ 的基态，以及能量 $E=\varepsilon$、简并度为 $3$ 的激发态的分子。

(1) 求该内部自由度对气体内能的贡献 $U_{\mathrm{int}}$，表示为 $N,T$ 的函数。

(2) 求该气体的定容热容，并画出其作为温度 $T$ 的函数的大致图形。

**5.** 考虑能级 $E_j=Bj(j+1)$ 具有 $(2j+1)$ 重简并的分子。其中 $B$ 为具有能量单位的正常数，$j$ 取所有非负整数。

(1) 用关于 $j$ 的求和 $\displaystyle\sum_{j=0}^{\infty}$ 表示该内部自由度对应的气体配分函数 $Z_{\mathrm{int}}$。

(2) 高温（$T\gg B/k$）时，将上一问 $Z_{\mathrm{int}}$ 中的求和换成积分，表示为温度 $T$ 的函数。

(3) 求该气体在高温下的定容热容。

**6.** 举出其内部自由度可由问4或问5的模型描述的分子实例，并说明对应哪一种情况。

## **Kai**

### 1

三方向の Gaussian 積分を行う。熱的 de Broglie 波長 $\Lambda=h/\sqrt{2\pi mkT}$ を用いると、

$$
\boxed{\begin{gathered}
Z=\frac1{N!}\left[V\left(\frac{2\pi mkT}{h^2}\right)^{3/2}\right]^N\\
=\frac1{N!}\left(\frac V{\Lambda^3}\right)^N
\end{gathered}}.
$$

### 2

$$
\begin{gathered}
F=-kT\log Z\\
=kT\log N!-NkT\log\frac V{\Lambda^3}
\simeq\boxed{-NkT\left[\log\frac V{N\Lambda^3}+1\right]}.
\end{gathered}
$$

固定した $T$ に対し $V,N$ を同じ倍率にすると $F$ もその倍率になるので、熱力学極限で示量的である。

### 3

$$
\begin{gathered}
\boxed{P=-\left(\frac{\partial F}{\partial V}\right)_{T,N}=\frac{NkT}{V}},\\
U=F-T\left(\frac{\partial F}{\partial T}\right)_{V,N}=\frac32NkT,
\end{gathered}
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

![内部二準位と並進運動による定積熱容量](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chiba-university/science_engineering/physics/2022/chiba_phys_2022_II_heat_capacity.png)

### 5

#### (1)

一分子の内部配分関数と気体全体の内部配分関数を区別すると、

$$
\boxed{\begin{gathered}
z_{\rm int}=\sum_{j=0}^{\infty}(2j+1)e^{-\beta Bj(j+1)},\\
Z_{\rm int}=z_{\rm int}^{\,N}
\end{gathered}}.
$$

並進部分の $Z$ に既に $1/N!$ が含まれるので、内部部分にもう一度付けない。

#### (2)

$$
\begin{gathered}
z_{\rm int}\simeq\int_0^{\infty}(2j+1)e^{-\beta Bj(j+1)}\,dj
=\int_0^{\infty}e^{-\beta Bu}\,du\\
=\frac{kT}{B},
\end{gathered}
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

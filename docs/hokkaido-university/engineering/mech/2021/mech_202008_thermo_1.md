---
sidebar_label: "2020年8月実施 熱力学 問1"
tags:
  - Hokkaido-University
  - Physics.Thermodynamics.Rankine-Cycle
---

# 北海道大学 工学院 機械・宇宙航空工学系 2020年8月実施 熱力学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

ランキンサイクルは、$1\to2$：タービンによる断熱膨張、$2\to3$：復水器による等温等圧冷却、$3\to4$：ポンプによる水の断熱圧縮、$4\to1$：ボイラーによる等圧加熱からなる。状態1は $5\,\mathrm{MPa},600\,{}^\circ\mathrm C$ の過熱蒸気、復水温度は $60\,{}^\circ\mathrm C$、状態3は飽和水とする。ポンプ仕事を無視し $h_4=h_3$ とする。

与えられた蒸気表のうち、この条件で用いる値は次のとおりである。

| 状態 | $h$ [kJ/kg] | $s$ [kJ/(kg·K)] |
|---|---:|---:|
| $5\,\mathrm{MPa},600\,{}^\circ\mathrm C$ の過熱蒸気 | 3666.8 | 7.260 |
| $60\,{}^\circ\mathrm C$ の飽和水 | 251.2 | 0.8312 |
| $60\,{}^\circ\mathrm C$ の乾き飽和蒸気 | 2608.9 | 7.908 |

1. 状態1の比エンタルピー $h_1$ を求めよ。
2. $1\to2$ が可逆断熱変化のとき、状態2の乾き度 $x$ と比エンタルピー $h_2$ を求めよ。
3. 実際には不可逆膨張で同じ復水温度の状態 $2'$ になる。タービン断熱効率 $\eta_t=(h_1-h_{2'})/(h_1-h_2)=0.900$ として $h_{2'}$ を求めよ。
4. 状態3の比エンタルピー $h_3$ を求めよ。
5. 蒸気1 kg当たりのボイラー加熱量 $q$、実際のタービン仕事 $w$、サイクル熱効率 $\eta$ を求めよ。

4桁まで計算し、最終結果は有効数字3桁で記せ。

#### 题目描述

朗肯循环依次为汽轮机绝热膨胀、冷凝器等温等压冷却、水泵绝热压缩和锅炉等压加热。汽轮机入口为 $5\,\mathrm{MPa},600\,{}^\circ\mathrm C$，冷凝温度 $60\,{}^\circ\mathrm C$，冷凝器出口为饱和水；忽略水泵功。使用表中的比焓和比熵，求入口比焓、等熵膨胀出口干度及比焓、断热效率0.900时的实际出口比焓、冷凝器出口比焓，以及每千克蒸汽的吸热、实际输出功和循环效率。过程保留4位有效数字，结果写3位。

## **Kai**

### (1), (2)

蒸気表より $h_1=3666.8\,\mathrm{kJ/kg}$、$s_1=7.260\,\mathrm{kJ/(kg\cdot K)}$。したがって

$$
\boxed{h_1=3.67\times10^3\,\mathrm{kJ/kg}}.
$$

可逆断熱膨張では $s_2=s_1$。飽和水・乾き飽和蒸気の値を $s_f,s_g,h_f,h_g$ として

$$
x=\frac{s_1-s_f}{s_g-s_f}
=\frac{7.260-0.8312}{7.908-0.8312}=0.908433\ldots,
$$

$$
h_2=h_f+x(h_g-h_f)=2393.0129\ldots\,\mathrm{kJ/kg}.
$$

$$
\boxed{x=0.908,\qquad h_2=2.39\times10^3\,\mathrm{kJ/kg}}.
$$

### (3), (4)

$$
h_{2'}=h_1-0.900(h_1-h_2)=2520.3916\ldots\,\mathrm{kJ/kg},
\qquad\boxed{h_{2'}=2.52\times10^3\,\mathrm{kJ/kg}}.
$$

状態3は $60\,{}^\circ\mathrm C$ の飽和水なので

$$
\boxed{h_3=251\,\mathrm{kJ/kg}}\qquad(h_3=251.2\text{ を以後の計算に用いる}).
$$

### (5)

$$
q=h_1-h_3=3415.6\,\mathrm{kJ/kg},\quad
w=h_1-h_{2'}=1146.4084\ldots\,\mathrm{kJ/kg},\quad
\eta=\frac wq=0.3356389\ldots.
$$

$$
\boxed{q=3.42\times10^3\,\mathrm{kJ/kg},\quad
w=1.15\times10^3\,\mathrm{kJ/kg},\quad\eta=33.6\%}.
$$

## **Reference**

- [北海道大学公式原題の保存版：令和3年度、令和2年8月25日実施、PDF 11–12ページ](https://web.archive.org/web/20220302172425id_/https://www.eng.hokudai.ac.jp/commonfile/files/graduate/examinfo/gr03/exam2021c1.pdf)

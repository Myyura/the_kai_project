---
sidebar_label: '2021年8月実施 プログラミング'
tags:
  - Tokyo-University
  - Programming
  - Least-Squares-Method
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2021年8月実施 プログラミング

## **Author**
[FunTotal](https://github.com/FunTotal)

## **Description**
We store the daily numbers of newly infected people with some virus (new infections, below) in a text fle in chronological order. The numbers are separated by colons (\:). For example.when the numbers of new infections for 5 days are

```text
621 591 907 1121 1032
```

the following text

```text
621:591:907:1121:1032
```

is stored in a fle.

### Problem 1
(1) Find the 10th biggest number of new infections stored in the text file `infections.txt` and write it on the answer sheet. Count after removing duplicate numbers. For example, thethird biggest number among `1, 2, 3, 3, 4` is `2`.

(2) For every text file `f` in the data folder, find $N_f$,, the 10th biggest number of new infections in `f`, as in Question (1). Then calculate the sum of all $N_f$, and write it on the answer sheet.

(3) For $x_0,x_1,x_2,x_3,\dots x_{n-1}$, the numbers of new infections stored in the text fle `infections.txt`,the new-infection increment on a day is the diference $x_i - x_{i-1}$ between the number of the new infections $x_i$ on that day and $x_{i-1}$ on the day before. Here, the number of new infections on the day before the frst day is zero.
Concatenate the new-infection increment for every day into one character sequence and store it in the text file `diff.txt`, Furthermore, count the characters in this sequence and write that number on the answer sheet, The newline character is not counted. Start with `+` for a non-negative number and start with `-` for a negative number.For example,when the new-infection increments are

`621 -30 0 -316 214 -89`

the following character sequence

`+621-30+0-316+214-89`

is stored and the number of characters is 20

(4) For the numbers of new infections in the text fle `infections.txt`, find the shortest period among the periods in which the sum of the new-infection increments is maximized. Write that period on the answer sheet. If more than one such period is found, write all the periods. The frst day is Day 1. For example, answer like “From Day 8 to 24”.Furthermore.calculate the sum of the new-infection increments during that period, and write that sum onthe answer sheet.

### Problem 2
(1) Let $x_0, x_1, x_2, x_3, ..., x_{n-1}$ be the numbers of new infections on every day stored in the text file `infections.txt`. We define the following function

$$
ave(i) = \frac{1}{7} \sum_{k=-3}^{3} x_{i+k}
$$

where $3 \leq i < n - 3$.

Calculate the maximum and minimum values of $ave(i)$ and write them on the answer sheet. Furthermore, calculate the sum

$$
\sum_{i=3}^{n-4} ave(i)
$$

and write it on the answer sheet. Round those values to 4 decimal places.

(2) Let $x_0, x_1, x_2, x_3, ..., x_{m-1}$ and $y_0, y_1, y_2, y_3, ..., y_{n-1}$ be the numbers of new infections stored in text files $x$ and $y$, respectively ($m \geq n$). We define $s(x, y)$, the similarity score between these two files, as

$$
s(x, y) = - \min_{i} \sum_{k=0}^{n-1} (x_{k+i} - y_k)^2
$$

where $0 \leq i \leq m - n$.

Among arbitrary pairs of two files in the folder `data`, find the pair with the highest similarity score and write the two file names on the answer sheet. Furthermore, write the similarity score on the answer sheet. When more than one such pair is found, write all the pairs and their scores.

(3) Let $x_0, x_1, x_2, x_3, ..., x_{n-1}$ be the numbers of new infections stored in the text file `infections2.txt`. These numbers are denoted by $\{x_i\}$.

We find the approximate formula $ai + k$ that has a good fit to these numbers $\{x_i\}$. For example, the approximate value for $x_3$ is $3a + k$. Here, $a$ and $k$ are the constants that minimize the error

$$
\sum_{i=0}^{n-1} (ai + k - x_i)^2
$$

for $\{x_i\}$. They are calculated as follows.

$$
a = \frac{n \sum i x_i - \sum i \sum x_i}{n \sum i^2 - (\sum i)^2}
$$

$$
k = \frac{\sum i^2 \sum x_i - \sum i x_i \sum i}{n \sum i^2 - (\sum i)^2}
$$

where $\sum$ represents $\sum_{i=0}^{n-1}$.

Calculate $a$ and $k$ rounded to 4 decimal places and write them on the answer sheet.

(4) Let $x_0, x_1, x_2, x_3, ..., x_{n-1}$ be the numbers of new infections stored in the text file `infections2.txt`. For a given $s$, a sub-sequence $x_s, x_{s+1}, x_{s+2}, ..., x_{s+30}$ of these numbers is denoted by $\{x_{s+i}\}$. Here, $0 \leq s < n - 30$.

We find the approximate formula $ka^i$ that has a good fit to a sub-sequence $\{x_{s+i}\}$. For example, the approximate value of $x_{s+3}$ is $ka^3$. Here, $a$ and $k$ are the constants that minimize this error

$$
\sum_{i=0}^{30} (\log_e ka^i - \log_e (x_{s+i} + 1))^2
$$

for $\{x_{s+i}\}$.
Find $s$ such that it maximizes the value of $a$ in the approximate formula $ka^i$ for $\{x_{s+i}\}$. Write the values of $s, a, k$ for such $s$ on the answer sheet. Round $a$ and $k$ to 4 decimal places. When more than one such $s$ is found, write the values of $s, a, k$ for every $s$.


## **Kai**
We currently do not have the corresponding sample data files. If you have them and are willing to share, please submit a PR.
The author create some simple samples (thus the file-related parts in the following code do not fully correspond to the problem statement but rather to the data file created by the author) and the completed code files as well as the simple samples are in this [repository](https://github.com/tomfluff/UTokyo_CI_Entrance_Exam/tree/main/2020-Summer).

### Problem 1
#### (1)

```c++
/*
前言:这次的卷子也不是很难，除了最后一题有点考察数学那边最小二乘法有点思维的转换，其他的基本都是
按照题意模拟即可，不过这里考察了一个遍历文件夹，也是需要准备一下相关的库函数的使用。
*/
#include <bits/stdc++.h>
#define int long long
using namespace std;
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2022_summer/infections.txt", ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans11.txt", ios::out);
    if (!fin.is_open()) assert(0);
    string str; fin >> str;
    vector<int> vec; //先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) { //直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    // 找第10大的去重后的数字
    sort(vec.begin(), vec.end());
    vec.erase(unique(vec.begin(), vec.end()), vec.end());
    assert(vec.size() >= 10);
    fout << vec[vec.size() - 10] << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--) solve();
    return 0;
}
```

#### (2)

```c++
/*
本题主要难在要提前准备好遍历文件夹的方式
*/
#include <bits/stdc++.h>
#define int long long
using namespace std;
int get_Nf(string path) {
    ifstream fin(path, ios::in);
    if (!fin.is_open())
        assert(0);
    string str;
    fin >> str;
    vector<int> vec;  // 先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) {  // 直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else
            num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    // 找第10大的去重后的数字
    sort(vec.begin(), vec.end());
    vec.erase(unique(vec.begin(), vec.end()), vec.end());
    assert(vec.size() >= 10);
    return vec[vec.size() - 10];
}
namespace fs = filesystem;
void solve() {
    string folder_path = "E:/UTokyo_Entrance_Exam/CI/2022_summer/data_forder/";
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans12.txt", ios::out);
    int res = 0;
    for (const auto& entry : fs::directory_iterator(folder_path)) {
        if (entry.is_regular_file()) { 
            string file_path = entry.path().string();
            try {
                int nf = get_Nf(file_path);
                res += nf;
            } catch (const exception& e) {
                cout << "Error processing file " << file_path << ": "
                     << e.what() << endl;
            }
        }
    }
    fout << res << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

#### (3)
```c++
/*
按照题意简单模拟，引入了差分的概念
*/
#include <bits/stdc++.h>
#define int long long
using namespace std;
int cal(int num) {
    int res = 0;
    while (num) num /= 10, res++;
    return res;
}
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2022_summer/infections1.txt", ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans13.txt", ios::out);
    if (!fin.is_open())
        assert(0);
    string str;
    fin >> str;
    vector<int> vec;  // 先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) {  // 直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else
            num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    vector<int> diff;
    diff.push_back(vec[0]);
    for (int i = 1; i < vec.size(); i++) {
        diff.push_back(vec[i] - vec[i - 1]);
    }
    int cnt = 0;
    for (auto it : diff) {
        if (it >= 0) fout << "+" << it;
        else fout << it;
        cnt += 1 + cal(abs(it));
    }
    fout << "\n" << "the number of characters is " << cnt << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

#### (4)

```c++
/*
这题考察的是经典dp中的最大子段和，不过还需要记录一下最大子段和的位置
*/
#include <bits/stdc++.h>
#define int long long
#define pii pair<int, int>
using namespace std;
int cal(int num) {
    int res = 0;
    while (num)
        num /= 10, res++;
    return res;
}
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2022_summer/infections2.txt", ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans14.txt", ios::out);
    if (!fin.is_open())
        assert(0);
    string str;
    fin >> str;
    vector<int> vec;  // 先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) {  // 直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else
            num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    vector<int> diff;
    diff.push_back(vec[0]);
    for (int i = 1; i < vec.size(); i++) {
        diff.push_back(vec[i] - vec[i - 1]);
    }
    int mxsum = diff[0], nowsum = diff[0], mnlen = 1, nowlen = 1;
    vector<pii> res;
    res.push_back({1, 1});
    for (int i = 1; i < diff.size(); i++) {
        nowsum += diff[i], nowlen++;
        if (nowsum > mxsum || nowsum == mxsum && nowlen < mnlen) { //更大或者相等且更短
            mxsum = nowsum, mnlen = nowlen;
            res.clear();
            res.push_back({i + 1 - nowlen + 1, i + 1});
        }
        else if (nowsum == mxsum && nowlen == mnlen) {
            res.push_back({i + 1 - nowlen + 1, i + 1});
        }
        else if (nowsum <= 0) {
            nowsum = nowlen = 0;
        }
    }
    for (auto [l, r] : res)
        fout << "From Day" << l << " to " << r << "\n";
    fout << "the sum of that period is " << mxsum << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

### Problem 2

#### (1)

```c++
/*
按照题意模拟，c++要注意精度问题，由于没有数据文件，不知道题目的精度要求怎么样，保险起见用long long和long double尽量保持精度，除法也是最后再除
*/
#include <bits/stdc++.h>
#define int long long
#define db long double
using namespace std;
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2022_summer/infections.txt",
                 ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans21.txt", ios::out);
    if (!fin.is_open())
        assert(0);
    string str;
    fin >> str;
    vector<int> vec;  // 先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) {  // 直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else
            num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    db mx = -1e9, mn = 1e9;
    int sum = 0, n = vec.size();
    for (int i = 3; i < n - 3; i++) {
        int tem = 0;
        for (int k = -3; k <= 3; k++)
            tem += vec[i + k];
        db ave = (db) tem / 7.0;
        mx = max(mx, ave), mn = min(mn, ave);
        sum += tem; //c++有浮点误差，尽量用整数，最后再统一除7.0
    }
    fout << fixed << setprecision(4) << "max ave = " << mx << "\n"
    << "min ave = " << mn << "\n"
    << "sum of ave = " << (db)((db)sum / 7.0) << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

#### (2)

```c++
/*
这题也是复用前面遍历文件夹的方法，按照题目的公式模拟一下
*/
#include <bits/stdc++.h>
#define int long long
#define pss pair<string, string>
using namespace std;
namespace fs = filesystem;
vector<int> readfile(string path) {
    ifstream fin(path, ios::in);
    if (!fin.is_open())
        assert(0);
    string str;
    fin >> str;
    vector<int> vec;  // 先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) {  // 直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else
            num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    return vec;
}
int cal(string path1, string path2) {
    vector<int> x = readfile(path1), y = readfile(path2);
    if (x.size() < y.size()) swap(x, y);
    int m = x.size(), n = y.size();
    int point = 1e18;
    for (int i = 0; i <= m - n; i++) {
        int tem = 0;
        for (int k = 0; k <= n - 1; k++)
            tem += (x[k + i] - y[k]) * (x[k + i] - y[k]);
        point = min(point, tem);
    }
    return -point;
}
void solve() {
    string folder_path = "E:/UTokyo_Entrance_Exam/CI/2022_summer/data_forder/";
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans22.txt", ios::out);
    vector<string> paths;
    for (const auto& entry : fs::directory_iterator(folder_path)) {
        if (entry.is_regular_file()) {
            string file_path = entry.path().string();
            try {
                paths.push_back(file_path);
            } catch (const exception& e) {
                cout << "Error processing file " << file_path << ": "
                     << e.what() << endl;
            }
        }
    }
    int mxpoint = -1e18;
    vector<pss> res;
    for (int i = 0; i < paths.size(); i++)
        for (int j = i + 1; j < paths.size(); j++) {
            int point = cal(paths[i], paths[j]);
            if (point > mxpoint) mxpoint = point, res.clear(), res.push_back({paths[i], paths[j]});
            else if (point == mxpoint) res.push_back({paths[i], paths[j]});
        }
    for (auto [a, b] : res)
        fout << "file names : " << a << " " << "and " << b << "\n";
    fout << "their scores are " << mxpoint << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

#### (3)

```c++
/*
题目给出最小二乘法公式，按照题目计算一下，同样注意精度问题
*/
#include <bits/stdc++.h>
#define int long long
#define db long double
using namespace std;
void solve() {
    ifstream fin("E:/UTokyo_Entrance_Exam/CI/2022_summer/infections2.txt",
                 ios::in);
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans23.txt", ios::out);
    if (!fin.is_open())
        assert(0);
    string str;
    fin >> str;
    vector<int> vec;  // 先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) {  // 直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else
            num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    
    int sum_ixi = 0, sum_i = 0, sum_i2 = 0, sum_xi = 0;
    int n = vec.size();
    for (int i = 0; i < n - 1; i++) {
        sum_ixi += i * vec[i];
        sum_i += i;
        sum_xi += vec[i];
        sum_i2 += i * i;
    }
    db a = ((db)n * sum_ixi - sum_i * sum_xi) / (n * sum_i2 - (sum_i) * (sum_i));
    db k = ((db)sum_i2 * sum_xi - sum_ixi * sum_i) / (n * sum_i2 - sum_i * sum_i);
    fout << fixed << setprecision(4) << "a = " << a << ", k = " << k << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

#### (4)

```c++
/*
这题有点思维含量，要注意到合理利用第三问的公式，取对数转换为第三问的线性问题。要注意c++没有loge函数，还需要用换底公式 loge x = log2(x) / log2(e), c++中的exp(x)函数是 e ^ x, exp(1) 即为自然对数e
*/
#include <bits/stdc++.h>
#define int long long
#define db long double
#define pii pair<int, int>
using namespace std;
vector<int> readfile(string path) {
    ifstream fin(path, ios::in);
    if (!fin.is_open())
        assert(0);
    string str;
    fin >> str;
    vector<int> vec;  // 先处理文件输入读到vec里面
    int num = 0;
    for (auto ch : str) {  // 直接暴力逐字符读取, 可能有直接用库以冒号切割的方法
        if (ch == ':') {
            vec.push_back(num);
            num = 0;
        } else
            num = num * 10 + ch - '0';
    }
    vec.push_back(num);
    return vec;
}
pii calak(vector<db> vec) { // 给定 x 求线性的最小拟合的 a 和 k
    db sum_ixi = 0, sum_i = 0, sum_i2 = 0, sum_xi = 0;
    int n = vec.size();
    for (int i = 0; i < n - 1; i++) {
        sum_ixi += i * vec[i];
        sum_i += i;
        sum_xi += vec[i];
        sum_i2 += i * i;
    }
    db a =
        ((db)n * sum_ixi - sum_i * sum_xi) / (n * sum_i2 - (sum_i) * (sum_i));
    db k =
        ((db)sum_i2 * sum_xi - sum_ixi * sum_i) / (n * sum_i2 - sum_i * sum_i);
    return {exp(a) * 10000, exp(k) * 10000};
}
void solve() {
    ofstream fout("E:/UTokyo_Entrance_Exam/CI/2022_summer/ans24.txt", ios::out);
    vector<int> vec = readfile("E:/UTokyo_Entrance_Exam/CI/2022_summer/infections3.txt");
    vector<array<int, 3>> res;
    int mxa = -1e18;
    int n = vec.size();
    for (int s = 0; s < n - 30; s++) {
        vector<db> x;
        for (int i = s; i <= s + 30; i++)    
            x.push_back(log(vec[i] + 1) / log(exp(1)));
        auto [a, k] = calak(x);
        if (a > mxa) mxa = a, res.clear(), res.push_back({s, a, k});
        else if (a == mxa) res.push_back({s, a, k});
    }
    for (auto [s, a, k] : res) {
        fout << fixed << setprecision(4) << "s = " << s << ", a = " << a / 1e4 << ", k = " << k / 1e4 << "\n";
    }
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

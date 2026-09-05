---
sidebar_label: 2021年8月実施 プログラミング 第1問
tags:
  - Tokyo-University
  - Computer-Science.Dynamic-Programming.Maximum-Subarray-Sum
  - Computer-Science.Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2021年8月実施 プログラミング 第1問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki), [FunTotal](https://github.com/totalhuang), 祭音Myyura

## **Description**

Answer the following questions by writing programs. If you are taking an onsite examination, the files needed for answering the questions are found in the USB flash drive. Store the programs in the USB flash drive before the examination ends. Also the files generated for answering questions must be stored in the USB flash drive. If you are taking an online replacement examination, the files needed for answering the questions are in the given zip file. To submit the programs and the files, follow the instructions separately given. The submission URL is shown on the last page.

We store the daily numbers of newly infected people with some virus (*new infections*, below) in a text file in chronological order. The numbers are separated by colons (:). For example, when the numbers of new infections for 5 days are

`621 591 907 1121 1032`

the following text

`621:591:907:1121:1032`

is stored in a file.

### **Problem**

(1) Find the 10th biggest number of new infections stored in the text file `infections.txt` and write it on the answer sheet. Count after removing duplicate numbers. For example, the third biggest number among 1, 2, 3, 3, 4 is 2.

(2) For every text file $f$ in the data folder, find $N_f$, the 10th biggest number of new infections in $f$, as in Question (1). Then calculate the sum of all $N_f$ and write it on the answer sheet.

(3) For $x_0,x_1,x_2,x_3,\dots,x_{n-1}$, the numbers of new infections stored in the text file `infections.txt`, the *new-infection increment* on a day is the difference $x_i-x_{i-1}$ between the number of the new infections $x_i$ on that day and $x_{i-1}$ on the day before. Here, the number of new infections on the day before the first day is zero.

Concatenate the new-infection increment for every day into one character sequence and store it in the text file `diff.txt`. Furthermore, count the characters in this sequence and write that number on the answer sheet. The newline character is not counted. Start with + for a non-negative number and start with - for a negative number.

For example, when the new-infection increments are

`621 -30 0 -316 214 -89`

the following character sequence

`+621-30+0-316+214-89`

is stored and the number of characters is 20.

(4) For the numbers of new infections in the text file `infections.txt`, find the shortest period among the periods in which the sum of the new-infection increments is maximized. Write that period on the answer sheet. If more than one such period is found, write all the periods. The first day is Day 1. For example, answer like "From Day 8 to 24". Furthermore, calculate the sum of the new-infection increments during that period, and write that sum on the answer sheet.

### 题目描述

编程回答下列问题。现场考试所需文件在 U 盘中，考试结束前须把程序及生成文件保存回 U 盘；线上替代考试所需文件在给定 zip 中，按另行说明提交，提交网址见试卷末页。

某种病毒每天的新增感染人数按时间顺序存入文本文件，各数以冒号 `:` 分隔。例如五天数据
`621 591 907 1121 1032`
存为
`621:591:907:1121:1032`。

1. 求 `infections.txt` 中第 10 大的新增感染人数并写在答题纸上。排名前先去重；例如 $1,2,3,3,4$ 的第 3 大是 2。
2. 对 `data` 文件夹中每个文本文件 $f$，按第 1 问求第 10 大值 $N_f$，再求所有 $N_f$ 之和并写在答题纸上。
3. 设 `infections.txt` 中每日数据为 $x_0,\ldots,x_{n-1}$。当天“新增感染增量”为 $x_i-x_{i-1}$，第一天之前的人数视为 0。把每天增量无分隔地连接成一个字符串存入 `diff.txt`，并统计字符数写在答题纸上，不计换行；非负数必须以 `+` 开头，负数以 `-` 开头。例如增量
   `621 -30 0 -316 214 -89`
   存为
   `+621-30+0-316+214-89`，字符数为 20。
4. 对 `infections.txt`，在“增量总和达到最大”的所有连续日期区间中，找长度最短者；第一天记为 Day 1，按 `From Day 8 to 24` 这类格式写在答题纸上。如有多个符合条件的区间，全部写出；另写出该区间内增量之和。

## **Kai**
The sample data files are [here](https://github.com/sophytoeat/Problem/tree/main/%E9%81%8E%E5%8E%BB%E5%95%8F/%E5%89%B5%E9%80%A0%E6%83%85%E5%A0%B1%E5%AD%A6/%E4%B8%80%E8%88%AC%E6%95%99%E8%82%B2%E7%A7%91%E7%9B%AE(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0)/2022%E5%B9%B4%E5%BA%A6_%E5%A4%8F_%E4%B8%80%E8%88%AC/%E9%85%8D%E5%B8%83%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF).

### (1)
#### itsuitsuki's solution
```py
with open('infections.txt') as f_infe:
    tmp = f_infe.readline()
    orig_infelst = tmp.split(':')
    orig_infelst = [int(s) for s in orig_infelst]
    infelst = list(set(orig_infelst))
print(sorted(infelst, reverse=True)[9])
```

The 10th biggest distinct number is 1471.

#### FunTotal's solution
```c++
#include <bits/stdc++.h>
#define int long long
using namespace std;
void solve() {
    ifstream fin("infections.txt", ios::in);
    ofstream fout("ans11.txt", ios::out);
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

### (2)
#### itsuitsuki's solution
```py
import os
# find all files with "dataxx.txt"
folder = 'data'
filelist = []
for filename in os.listdir(folder):
    if filename.endswith('.txt') and os.path.isfile(os.path.join(folder, filename)):
        filelist.append(os.path.join(folder, filename))
def kth_biggest(ls, k):
    ls = list(set(ls))
    return sorted(ls, reverse=True)[k-1]
lists = [open(tmp).readline().split(':') for tmp in filelist]
lists = [[int(s) for s in l] for l in lists]
nfs = [kth_biggest(l, 10) for l in lists]
print(sum(nfs))
```

The sum is 8650.

#### FunTotal's solution
```c++
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
    string folder_path = "data/";
    ofstream fout("ans12.txt", ios::out);
    int res = 0;
    for (const auto& entry : fs::directory_iterator(folder_path)) {
        if (entry.is_regular_file() && entry.path().extension() == ".txt") {
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

### (3)
#### itsuitsuki's solution
```py
diffs = []
diffstring = ""
for i, n in enumerate([0] + orig_infelst[:-1]):
    nn = orig_infelst[i]
    d = nn-n
    diffs += [d]
    diffstring += str(d) if d < 0 else '+' + str(d)
print(diffstring)
print(len(diffstring))
with open('diff.txt', 'w') as f:
    f.write(diffstring)
```

The character count is 1431.

#### FunTotal's solution
```c++
/*
按照题意简单模拟，引入了差分的概念
*/
#include <bits/stdc++.h>
#define int long long
using namespace std;
int cal(int num) {
    int res = 1;
    if (num == 0) return res;
    res = 0;
    while (num) num /= 10, res++;
    return res;
}
void solve() {
    ifstream fin("infections.txt", ios::in);
    ofstream fout("diff.txt", ios::out);
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
    fout << "\n";
    cout << "the number of characters is " << cnt << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--)
        solve();
    return 0;
}
```

### (4)
#### itsuitsuki's solution
Brute force $O(n^3)$:
```py
# O(n^3)
print("Total: {} days".format(len(orig_infelst)))
tuples = []
for i in range(len(diffs)):
    for j in range(i, len(diffs)):
        tuples.append((sum(diffs[i:j+1]), i, j))
maximal = max(t[0] for t in tuples)
min_length = min(j-i+1 for total, i, j in tuples if total == maximal)
for t in tuples:
    if t[0] == maximal and t[2]-t[1]+1 == min_length:
        print(t[0], t[1]+1, t[2]+1)
```


$O(n)$ (`dpmemory` to only save the last start point, since the question asks for the smallest period)
```py
dp = [diffs[0]] # dp[i] is the maximum constegious period ending with i
dpmemory = [0] # closest start point
for i, n in enumerate(diffs):
    if i == 0:
        continue
    if dp[i-1] < 0: # start newly with (i,i)
        dp += [n]
        dpmemory += [i]
    elif dp[i-1] > 0: # inherit
        dp += [dp[i-1] + n]
        dpmemory += [dpmemory[i-1]]
    else: # two choices
        dp += [n] # = dp[i-1] + n
        dpmemory += [i]
maximal = max(dp)
min_length = min(i-dd+1 for i, (d, dd) in enumerate(zip(dp, dpmemory))
                 if d == maximal)
for i, (d, dd) in enumerate(zip(dp, dpmemory)):
    if d == maximal and i-dd+1 == min_length:
        print(maximal, dd+1, i+1)
```

The periods:

From Day 109 to 306 (including 306)

The sum is 2447.

#### FunTotal's solution
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
    ifstream fin("infections.txt", ios::in);
    ofstream fout("ans14.txt", ios::out);
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
        if (nowsum <= 0)
            nowsum = diff[i], nowlen = 1;
        else
            nowsum += diff[i], nowlen++;
        if (nowsum > mxsum || nowsum == mxsum && nowlen < mnlen) { //更大或者相等且更短
            mxsum = nowsum, mnlen = nowlen;
            res.clear();
            res.push_back({i + 1 - nowlen + 1, i + 1});
        }
        else if (nowsum == mxsum && nowlen == mnlen) {
            res.push_back({i + 1 - nowlen + 1, i + 1});
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

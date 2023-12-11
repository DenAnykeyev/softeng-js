def get_list_words(filename):
    f = open(file=filename, mode='r', encoding='utf8')
    result = []
    for line in f.readlines():
        result += [line.strip()]
    return result


def get_index_word(all_words, word):  # бинарный поиск
    l, r = 0, len(all_words)-1
    while l <= r:
        mid = (l+r)//2
        if word == all_words[mid]: return mid
        if word > all_words[mid]: l = mid+1
        if word < all_words[mid]: r = mid-1
    return -1
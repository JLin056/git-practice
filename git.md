# 說明 blob, tree, commit, branch, head 分別是什麼
## blob
Git中檔案內容的基本單位。只儲存檔案內容，不包含檔案名稱、目錄結構等資訊。也就是git用Blob來知道檔案的內容有沒有變化。
## tree
類似這些檔案的目錄，儲存目錄和檔案之間的關聯性。 
## commit
類似章節裡面的小節，搭配commit message 來描述這個小節的內容，讓團隊未來方便找到相關的變更或功能。
也就是完成一階段工作（也可以是一個小function），就可以提交一次commit，記錄當前的專案狀態。
## branch
Git中的分支，可以在不同分支開發不同功能，最後再合併回主分支。
## head
目前在git中的位置，通常是指現在的分支內最新一次的commit。
所以如果現在在a分支，就會指向a分支最新的commit；在b分支，就會指向b分支最新的commit

# 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼
在add新檔案的過程中，會新增一個objects叫一個英文字母＋數字（例如：b2），底下會有 哈希值（例如：e7dc77a9caba5655dadf39bed6b3d3032798c7），這個值具有唯一性。
第一次commit之後，才會有main


# commit message 應該怎麼寫比較好？應該有什麼 style 嗎？
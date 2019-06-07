@posts.each do |post| 
    json.set! post.id do 
        json.extract! post, :id, :body, :created_at
        json.author post.author
    end
end
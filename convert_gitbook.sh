echo "Конвертируем GitBook формат..."

  # Обрабатываем все md файлы
  find docs -name "*.md" -type f | while read file; do
      echo "Обрабатываем: $file"

      # Заменяем GitBook синтаксис
      sed -i 's/{% hint style="info" %}/:::info/g' "$file"
      sed -i 's/{% hint style="warning" %}/:::warning/g' "$file"
      sed -i 's/{% hint style="danger" %}/:::danger/g' "$file"
      sed -i 's/{% endhint %}/:::/g' "$file"
      sed -i 's/{% embed url="\([^"]*\)" %}/[\1](\1)/g' "$file"
      sed -i '/{% endembed %}/d' "$file"
  done

  echo "Готово!"


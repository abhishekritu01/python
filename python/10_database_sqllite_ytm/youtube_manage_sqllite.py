import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('youtube_manage.db')

cursor = conn.cursor()

# Create table if it doesn't exist
cursor.execute('''
CREATE TABLE IF NOT EXISTS videos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    time TEXT NOT NULL
)
''')

def list_all_videos():
    try:
        cursor.execute('SELECT * FROM videos')        # Select all videos from the table in form of tuple
        rows = cursor.fetchall()
        if rows:
            for row in rows:
                print(f'{row[0]} - {row[1]} - {row[2]}')
        else:
            print("No videos found.")
    except Exception as e:
        print('Error:', e)

def add_video(name, time):
    try:
        cursor.execute('INSERT INTO videos (name, time) VALUES (?, ?)', (name, time))
        conn.commit()
        print("Video added successfully.")
    except Exception as e:
        print('Error:', e)

def update_video(video_id, new_name, new_time):
    try:
        cursor.execute('UPDATE videos SET name = ?, time = ? WHERE id = ?', (new_name, new_time, video_id))
        conn.commit()
        if cursor.rowcount:
            print("Video updated successfully.")
        else:
            print("Video ID not found.")
    except Exception as e:
        print('Error:', e)

def delete_video(video_id):
    try:
        cursor.execute('DELETE FROM videos WHERE id = ?', (video_id,))
        conn.commit()
        if cursor.rowcount:
            print("Video deleted successfully.")
        else:
            print("Video ID not found.")
    except Exception as e:
        print('Error:', e)

def main():
    print("Welcome to YouTube File Manager")
    while True:
        print("*" * 50)
        print("1. List all videos")
        print("2. Add a video")
        print("3. Update a video")
        print("4. Delete a video")
        print("5. Exit")
        print("*" * 50)
        choice = input("Enter your choice (1-5): ")
        print()

        if choice == "1":
            list_all_videos()
        elif choice == "2":
            name = input("Enter the name of the video: ")
            time = input("Enter the time of the video: ")
            add_video(name, time)
        elif choice == "3":
            video_id = input("Enter the id of the video to update: ")
            name = input("Enter the new name of the video: ")
            time = input("Enter the new time of the video: ")
            update_video(video_id, name, time)
        elif choice == "4":
            video_id = input("Enter the id of the video to delete: ")
            delete_video(video_id)
        elif choice == "5":
            break
        else:
            print("Invalid choice. Please enter a number from 1 to 5.")

    conn.close()
    print("Thank you for using YouTube File Manager.")

if __name__ == "__main__":
    main()
